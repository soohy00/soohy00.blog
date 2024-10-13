---
title: "This is about page ✋"
description: "Welcome to the About page. This is a place where you can introduce your blog or yourself."
---

## English Guide

Hello! This section is dedicated to introducing your blog. Here, you can showcase various information to your visitors, such as a blog introduction, personal profile, resume, portfolio, and more.

### Writing Guide

To edit this page, modify the `/contents/about/index.md` file. You can write it in the same way as any other post. The path to this file cannot be changed.

The Markdown document for the About page only contains a single frontmatter called `title`. The `title` frontmatter will be displayed as the title at the top of the About page.

### Disabling the About Page

To disable this page, you can set the `useAbout` configuration to `false` in your `blog-config.js` file.

## 한국어 가이드

안녕하세요. 이 곳은 블로그를 소개하기 위한 공간입니다. 블로그 또는 자신에 대한 소개부터 이력서, 포트폴리오 등 다양한 정보를 이곳에서 방문자들에게 보여줄 수 있습니다.

### 작성 가이드

이 페이지를 편집하려면, `/contents/about/index.md` 파일을 수정하면 됩니다. 다른 포스팅을 작성하는 것과 동일한 방식으로 작성할 수 있습니다. 이 파일의 경로는 변경할 수 없습니다.

About 페이지의 마크다운 문서는 오직 `title` 이라는 하나의 frontmatter 만 가지고 있습니다. `title` frontmatter 는 About 페이지 상단 제목으로 표시됩니다.

### 비활성화

About 페이지를 비활성화하려면, `blog-config.js` 파일의 `useAbout` 값을 `false`로 설정하세요. 비활성화되면 상단 메뉴에서 About 페이지 링크가 제거되고, `/about` 경로로 이 페이지에 접근할 수 없게 됩니다.