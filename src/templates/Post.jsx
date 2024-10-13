import React from "react";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import Layout from "components/Layout";
import Article from "components/Article";
import { siteUrl } from "../../blog-config";

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { title, date, tags, series } = post.frontmatter;
  const { excerpt } = post;
  const { slug } = post.fields;

  // Series data from the query with conditional slug check
  const seriesList = data.seriesList.nodes || [];
  const filteredSeries = seriesList.map(seriesPost => ({
    ...seriesPost,
    currentPost: seriesPost.id === post.id,
  }));

  return (
    <Layout>
      <SEO title={title} description={excerpt} url={`${siteUrl}${slug}`} />
      <Article>
        <Article.Header title={title} date={date} tags={tags} />
        {filteredSeries.length > 0 && (
          <Article.Series header={series} series={filteredSeries} />
        )}
        <Article.Body html={post.html} />
        {/* Series Navigation */}
        <div>
          {filteredSeries.map((seriesPost, i) => (
            <div key={i}>
              <a href={seriesPost.fields?.slug || "#"}>
                {seriesPost.frontmatter.title || "Untitled"}
              </a>
              {seriesPost.currentPost && <span>← Current</span>}
            </div>
          ))}
        </div>
      </Article>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query BlogPostBySlug($slug: String!, $series: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        series
      }
      fields {
        slug
      }
    }
    seriesList: allMarkdownRemark(
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;