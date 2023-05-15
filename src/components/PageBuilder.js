import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@/blocks/Hero';
import Text from '../blocks/Text';
import TextImage from '../blocks/TextImage';
import TextVideo from '../blocks/TextVideo';
import Image from '../blocks/Image';
import Video from '../blocks/Video';
import Grid from '../blocks/Grid';
import LogoGrid from '../blocks/LogoGrid';
import Tabs from '../blocks/Tabs';
import Slider from '../blocks/Slider';
import Testimonials from '../blocks/Testimonials';
import Team from '../blocks/Team';
import Accordions from '../blocks/Accordions';
import Vacancies from '../blocks/Vacancies';
import Locations from '../blocks/Locations';
import RecentArticles from '../blocks/RecentArticles';
import Form from '../blocks/Form';


export default function PageBuilder({ blocks, preview = false }) {
  return (
    <>
      {blocks &&
        blocks.map((block, i) => {
          switch (block.type) {
            case 'hero':
              return <Hero key={i} data={block} />;
            case 'text':
              return <Text key={i} data={block} preview={preview} />;
            case 'text_image':
              return <TextImage key={i} data={block} preview={preview} />;
            case 'text_video':
              return <TextVideo key={i} data={block} preview={preview} />;
            case 'image':
              return <Image key={i} data={block} preview={preview} />;
            case 'video':
              return <Video key={i} data={block} preview={preview} />;
            case 'grid':
              return <Grid key={i} data={block} preview={preview} />;
            case 'logo_grid':
              return <LogoGrid key={i} data={block} preview={preview} />;
            case 'tabs':
              return <Tabs key={i} data={block} preview={preview} />;
            case 'slider':
              return <Slider key={i} data={block} preview={preview} />;
            case 'testimonials':
              return <Testimonials key={i} data={block} preview={preview} />;
            case 'team':
              return <Team key={i} data={block} preview={preview} />;
            case 'accordions':
              return <Accordions key={i} data={block} preview={preview} />;
            case 'vacancies':
              return <Vacancies key={i} data={block} preview={preview} />;
            case 'locations':
              return <Locations key={i} data={block} preview={preview} />;
            case 'recentArticles':
              return <RecentArticles key={i} data={block} preview={preview} />;
            case 'form':
              return <Form key={i} data={block} preview={preview} />;
            
            default:
              return (
                <div className='container mx-auto'>
                  <div className='text-center'>
                    Missing Section {block.type}
                  </div>
                </div>
              );
          }
        })}
    </>
  );
}

export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      variant
      intro {
        heading
        rich_editor
        buttons {
          button {
            variant
            label
            url
          }
        }
      }
      main {
        heading
        rich_editor
        buttons {
          button {
            variant
            label
            url
          }
        }
      }
      image {
        childImageSharp {
          gatsbyImageData(
            width: 800
            quality: 72
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      images {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 72
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      video
      slider {
        slide {
          main {
            heading
            rich_editor
            buttons {
              button {
                variant
                label
                url
              }
            }
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          list {
            variant
            list_item {
              heading
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    quality: 72
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
      testimonials {
        testimonial {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          testimonial
          name
          job_title
          company_name
        }
      }
      tabs {
        tab {
          heading
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          main {
            heading
            rich_editor
            buttons {
              button {
                variant
                label
                url
              }
            }
          }
        }
      }
      team {
        team_member {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          name
          job_role
          linkedin
          bio
        }
      }
      list {
        variant
        list_item {
          heading
          rich_editor
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 72
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;