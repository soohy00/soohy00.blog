import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Giscus from "@giscus/react"
import { giscus } from "../../../../blog-config"

const Comment = () => {
  const themeState = useSelector(state => state.theme) || { theme: 'light' }
  const { theme } = themeState

  // 댓글 새로고침을 위한 함수
  const updateGiscusTheme = () => {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (!iframe) return
    
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme === 'dark' ? 'dark' : 'light' } } },
      'https://giscus.app'
    )
  }

  // theme이 변경될 때마다 댓글 테마도 업데이트
  useEffect(() => {
    updateGiscusTheme()
  }, [theme])

  return (
    <Giscus
      id="comments"
      repo={giscus.repo}
      repoId={giscus.repoId}
      category={giscus.category}
      categoryId={giscus.categoryId}
      mapping={giscus.mapping}
      strict={giscus.strict}
      reactionsEnabled={giscus.reactionsEnabled}
      emitMetadata={giscus.emitMetadata}
      inputPosition={giscus.inputPosition}
      lang={giscus.lang}
      loading={giscus.loading}
      theme={theme === "light" ? "light" : "dark"}
    />
  )
}

export default Comment
