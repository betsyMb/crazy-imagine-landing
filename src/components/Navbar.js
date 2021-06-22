import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "white",
  }),
  iconSpacing: {
    marginLeft: theme.spacing(10),
  },
  navbarIcons: {
    fontSize: 20,
    color: "#23aae1",
  },
  linkTypograpy: props => ({
    transition: "color 300ms ease",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "29px",
    color: props.scroll ? "#FFFFFF" : "black",
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: props.scroll ? "#FFFFFF" : "black",
    },
  }),
  navbarLogo: {
    width: 140,
    height: 73,
  },
}))

const Navbar = () => {
  const [scroll, setScroll] = useState(true)
  const classes = useStyles({
    scroll,
  })

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <AppBar color="transparent" position="fixed" className={classes.container}>
      <Toolbar>
        <Box
          m={1}
          mx={15}
          display="flex"
          width="100%"
          height="6em"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Link to="/">
            <StaticImage
              src="../images/logo.jpeg"
              alt="logo"
              className={classes.navbarLogo}
            />
          </Link>
          <Link to="/">
            <HomeIcon
              className={(classes.iconSpacing, classes.navbarIcons)}
              color="primary"
              fontSize="large"
            />
          </Link>
          <Typography variant="h5">
            <Link to="/" className={classes.linkTypograpy}>
              ABOUT US
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/" className={classes.linkTypograpy}>
              Services
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/" className={classes.linkTypograpy}>
              Team
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/" className={classes.linkTypograpy}>
              Blog
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link to="/" className={classes.linkTypograpy}>
              Contact
            </Link>
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="inherit"
            width="20%"
          >
            <Link to="/">
              <FacebookIcon
                className={(classes.spacing, classes.navbarIcons)}
                color="primary"
                fontSize="large"
              />
            </Link>
            <Link to="/">
              <TwitterIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link to="/">
              <InstagramIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link to="/">
              <LinkedInIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link to="/">
              <SearchIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
