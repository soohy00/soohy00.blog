import React from "react"
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import groupBy from 'lodash/fp/groupBy'
import sortBy from 'lodash/fp/sortBy'
import filter from 'lodash/fp/filter'
import reverse from 'lodash/fp/reverse'
import styled from "styled-components"
import SEO from "components/SEO"

import { graphql } from "gatsby"

import Layout from "components/Layout"
import Title from "components/Title"
import SeriesList from "components/SeriesList"
import VerticleSpace from "components/VerticalSpace"
import NoContent from "components/NoContent"

import { title, description, siteUrl } from "../../blog-config"

const TagListWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const SeriesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const series = React.useMemo(() => 
    flow(
      map(post => ({ ...post.frontmatter, slug: post.fields.slug })),
      groupBy("series"),
      map(series => ({
        name: series[0]?.series,
        posts: series,
        lastUpdated: series[0]?.date || "",
      })),
      filter(series => series.name),
      sortBy(series => new Date(series.lastUpdated)),
      reverse
    )(posts),
    [posts]
  )

  return (
    <Layout>
      <SEO title={title} description={description} url={siteUrl} />

      <TagListWrapper>
        {series.length > 0 && (
          <Title size="sm">There are {series.length} series.</Title>
        )}
      </TagListWrapper>

      {series.length === 0 && <NoContent name="series" />}

      <VerticleSpace size={32} />

      <SeriesList seriesList={series} />
    </Layout>
  )
}

export default SeriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  allMarkdownRemark(
    sort: { frontmatter: { date: DESC } }
  ) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
}
`
