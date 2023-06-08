import { useStaticQuery, graphql } from 'gatsby';
export const useAllPosts = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query AllPostsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { type: { eq: "post" } }, fileAbsolutePath: { regex: "/news/" } }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 120)
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                author
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 690
                      quality: 72
                      layout: FULL_WIDTH
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    `,
  );
  return posts;
};
