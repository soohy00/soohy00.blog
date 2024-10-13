import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Bio from "components/Bio"
import VerticalSpace from "components/VerticalSpace"
import Article from "components/Article"
import Comment from "components/Article/Footer/Comment"
import Tab from "components/Tab"
import NotFoundPage from "pages/404"

import styled from "styled-components"
import { title, description, siteUrl, useAbout } from "../../blog-config"
import Divider from "components/Divider"

const ArticleTitle = styled.h1`
  margin-bottom: 30px;
  line-height: 1.2;
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const AboutPage = ({ data }) => {
  // 첫 번째 엣지에서 데이터 가져오기
  const aboutPost = data?.markdownRemark || null
  const postsCount = data?.allMarkdownRemark?.totalCount || 0

  if (!useAbout || !aboutPost) return <NotFoundPage />

  return (
    <Layout>
      <SEO 
        title={aboutPost.frontmatter.title || title} 
        description={description} 
        url={siteUrl} 
      />
      <VerticalSpace size={48} />
      <Bio />
      <Tab postsCount={postsCount} activeTab="about" />
      <Article>
        <Wrapper>
          <ArticleTitle>{aboutPost.frontmatter.title}</ArticleTitle>
        </Wrapper>
        <Article.Body html={aboutPost.html} hideToc />
        <Wrapper>
          <Divider />
          <Comment />
        </Wrapper>
      </Article>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/contents/" }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark {
      totalCount
    }
  }
`