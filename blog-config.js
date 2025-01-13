module.exports = {
  title: "Soohy00",
  description: "안녕하세요. 제 블로그 글을 통해 많은 정보 얻어가셨으면 좋겠습니다.",
  author: "Soohy00",
  siteUrl: "https://soohy00.github.io",
  links: {
    github: "https://github.com/soohy00",
  },
  utterances: {
    repo: "soohy00/soohy00.github.io",
    type: "pathname",
  },
  profileImageFileName: "profile.png",
  useAbout: true,
  // See https://giscus.app/
  giscus: {
    repo: "username/repo-name",
    repoId: "YOUR_REPO_ID",
    category: "Comments",
    categoryId: "YOUR_CATEGORY_ID",
    mapping: "pathname",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom",
    lang: "ko",
    loading: "lazy",
  },
  notion: {
    token: process.env.NOTION_TOKEN,
    databaseId: process.env.NOTION_DATABASE_ID
  }
}
