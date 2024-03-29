import React from "react"
import { graphql } from "gatsby"
import { Box } from "@material-ui/core"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import HeroProjectsSection from "../components/HeroProjectsSection"
import AboutProjects from "../components/AboutProjects"
import GalleryProjects from "../components/GalleryProjects"
import DescriptionProjects from "../components/DescriptionProjects"
import MoreProjects from "../components/MoreProjects"
import Layout from "../components/layout"

const Project = ({ data }) => {
  const dataProject = data.strapiProjects
  const image = dataProject.images
  return (
    <Layout seo={{ metaTitle: dataProject.title }}>
      <PageWrapper>
        <Navbar variant="secondary" variantIcons="secondary" />
        <Box>
          <HeroProjectsSection image={image} title={dataProject.title} />
          <AboutProjects
            aboutProject={dataProject.details}
            images={image}
            moreAbout={dataProject.description}
          />

          <GalleryProjects
            gallery={dataProject.galleryImages}
            id={dataProject.id}
          />
          <DescriptionProjects description={dataProject.moreAbout} />

          <MoreProjects />
          <Footer />
          <Copyright />
        </Box>
      </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Project($id: String!) {
    strapiProjects(id: { eq: $id }) {
      details
      description
      id
      moreAbout
      title
      images {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      galleryImages {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default Project
