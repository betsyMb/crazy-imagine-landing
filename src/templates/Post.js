import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import {
  Box,
  CssBaseline,
  Hidden,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core"

import RecentlyPosted from "../components/RecentlyPosted"
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import Sidebar from "../components/Sidebar"

const useStyles = makeStyles(theme => ({
  postContainer: {
    backgroundColor: "#2A2A2A",
  },
  title: {
    color: "#ffffff",
    fontFamily: "Gotham",
    fontWeight: 500,
    fontSize: 72,
    margin: "auto 0px",
    maxWidth: 585,
    marginRight: "auto",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      marginRight: 0,
      maxWidth: "75%",
      textAlign: "center",
    },
  },
  description: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Roboto",
    maxWidth: "75%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "85%",
    },
  },
  content: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#2A2A2A",
    textIndent: 32,
  },
  postImage: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: 24,
      paddingBottom: 16,
      alignItems: "center",
    },
  },
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const title = data.article.title
  const description = data.article.description
  const content = data.article.content
  const image = getImage(data.article.image.localFile)

  return (
    <CssBaseline>
      <Navbar variant="secondary" />
      <Box className={classes.postContainer}>
        <Box
          height="850px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingBottom="40px"
          paddingLeft="290px"
          className={classes.titleContainer}
        >
          <Box
            display="flex"
            marginTop="auto"
            justifyContent={{
              xs: "center",
              lg: "flex-start",
            }}
            marginBottom="auto"
          >
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Hidden mdDown>
              <GatsbyImage image={image} alt={title} />
            </Hidden>
          </Box>
          <Typography className={classes.description}>{description}</Typography>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs>
          <Box p="24px">
            <ReactMarkdown className={classes.content}>{content}</ReactMarkdown>
          </Box>
        </Grid>

        <Hidden smDown>
          <Grid item>
            <Sidebar>
              <RecentlyPosted />
            </Sidebar>
          </Grid>
        </Hidden>
      </Grid>
      <Footer />
      <Copyright />
    </CssBaseline>
  )
}

export const query = graphql`
  query Article($id: String!) {
    article: strapiArticle(id: { eq: $id }) {
      title
      id
      description
      content
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`

export default Post
