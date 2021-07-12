import React from "react"
import { Box, Hidden } from "@material-ui/core"
import ProjectsMainSection from "../components/ProjectsMainSection"
import OurProjects from "../components/OurProjects"
import ProjectsServices from "../components/ProjectsServices"
import ProjectsContact from "../components/ProjectsContact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import PageWrapper from "../components/PageWrapper"
import NavbarMobile from "../components/NavbarMobile"

const projects = () => {
  return (
    <PageWrapper>
      <Hidden mdDown>
        <Navbar variant="dark" variantIcons="dark" />
      </Hidden>
      <Hidden lgUp>
        <NavbarMobile />
      </Hidden>
      <Box paddingTop="185px">
        <ProjectsMainSection />
        <OurProjects />
        <ProjectsServices />
        <Hidden mdDown>
          <ProjectsContact />
        </Hidden>
        <Footer height="498px" align="flex-end" />
        <Copyright />
      </Box>
    </PageWrapper>
  )
}

export default projects
