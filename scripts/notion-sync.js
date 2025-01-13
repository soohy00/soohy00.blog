const { Client } = require('@notionhq/client')
const { NotionToMarkdown } = require('notion-to-md')
const fs = require('fs').promises
const path = require('path')
const fetch = require('node-fetch')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// NotionToMarkdown 설정 확장
const n2m = new NotionToMarkdown({ 
  notionClient: notion,
  config: {
    // 코드 블록 변환 설정
    codeBlocks: {
      addLanguage: true,
      wrapperClassName: 'code-block',
    },
    // 수학 수식 지원
    equations: {
      katex: true,
    },
  }
})

// 블록 타입별 변환 규칙 추가
n2m.setCustomTransformer('callout', async (block) => {
  const emoji = block.callout.icon?.emoji || '💡'
  const content = block.callout.rich_text.map(text => text.plain_text).join('')
  return `> ${emoji} ${content}`
})

n2m.setCustomTransformer('table', async (block) => {
  const rows = await notion.blocks.children.list({ block_id: block.id })
  let markdown = '\n'
  
  // 테이블 헤더
  const headerRow = rows.results[0].table_row.cells
  markdown += '| ' + headerRow.map(cell => cell[0]?.plain_text || '').join(' | ') + ' |\n'
  markdown += '| ' + headerRow.map(() => '---').join(' | ') + ' |\n'
  
  // 테이블 내용
  for (let i = 1; i < rows.results.length; i++) {
    const row = rows.results[i].table_row.cells
    markdown += '| ' + row.map(cell => cell[0]?.plain_text || '').join(' | ') + ' |\n'
  }
  
  return markdown
})

async function downloadImage(url, fileName) {
  const response = await fetch(url)
  const buffer = await response.buffer()
  await fs.writeFile(fileName, buffer)
}

async function processToggleBlocks(blocks) {
  let markdown = ''
  for (const block of blocks) {
    if (block.type === 'toggle') {
      const summary = block.toggle.rich_text.map(text => text.plain_text).join('')
      const children = await notion.blocks.children.list({ block_id: block.id })
      const childContent = await processBlocks(children.results)
      markdown += `<details>\n<summary>${summary}</summary>\n\n${childContent}\n</details>\n\n`
    }
  }
  return markdown
}

async function processBlocks(blocks) {
  let markdown = ''
  for (const block of blocks) {
    switch (block.type) {
      case 'bookmark':
        markdown += `[${block.bookmark.url}](${block.bookmark.url})\n\n`
        break
      
      case 'equation':
        markdown += `$$\n${block.equation.expression}\n$$\n\n`
        break
      
      case 'divider':
        markdown += '---\n\n'
        break
      
      case 'to_do':
        const checked = block.to_do.checked ? '[x]' : '[ ]'
        markdown += `${checked} ${block.to_do.rich_text[0]?.plain_text || ''}\n`
        break
      
      case 'quote':
        markdown += `> ${block.quote.rich_text[0]?.plain_text || ''}\n\n`
        break
      
      case 'column_list':
        const columns = await notion.blocks.children.list({ block_id: block.id })
        markdown += '<div class="columns">\n\n'
        for (const column of columns.results) {
          markdown += '<div class="column">\n\n'
          const columnContent = await notion.blocks.children.list({ block_id: column.id })
          markdown += await processBlocks(columnContent.results)
          markdown += '</div>\n\n'
        }
        markdown += '</div>\n\n'
        break
    }
  }
  return markdown
}

async function convertNotionToMd() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      }
    })

    for (const page of response.results) {
      // 기본 마크다운 변환
      const mdblocks = await n2m.pageToMarkdown(page.id)
      let markdown = n2m.toMarkdownString(mdblocks)
      
      // 페이지 메타데이터 추출 및 확장
      const title = page.properties.Title.title[0].plain_text
      const date = page.properties.Date?.date?.start || new Date().toISOString()
      const tags = page.properties.Tags?.multi_select?.map(tag => tag.name) || []
      const series = page.properties.Series?.select?.name
      const description = page.properties.Description?.rich_text[0]?.plain_text
      
      // 확장된 frontmatter
      const frontmatter = `---
title: "${title}"
date: "${date}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
${series ? `series: "${series}"` : ''}
${description ? `description: "${description}"` : ''}
draft: false
---\n\n`

      // 파일 생성
      const fileName = title.toLowerCase().replace(/\s+/g, '-')
      const dirPath = path.join('contents/posts', fileName)
      await fs.mkdir(dirPath, { recursive: true })

      // 이미지 처리
      const imageBlocks = mdblocks.filter(block => block.type === 'image')
      for (const block of imageBlocks) {
        const imageUrl = block.image
        const imageName = `image-${Date.now()}.png`
        await downloadImage(imageUrl, path.join(dirPath, imageName))
        markdown = markdown.replace(imageUrl, `./${imageName}`)
      }

      // 추가 블록 처리
      const blocks = await notion.blocks.children.list({ block_id: page.id })
      const additionalContent = await processBlocks(blocks.results)
      markdown += additionalContent

      // 토글 블록 처리
      const toggleContent = await processToggleBlocks(blocks.results)
      markdown += toggleContent

      // 최종 파일 작성
      await fs.writeFile(
        path.join(dirPath, 'index.md'),
        frontmatter + markdown
      )
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

convertNotionToMd() 