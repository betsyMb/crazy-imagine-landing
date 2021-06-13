import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Box, CardMedia, Toolbar, Typography } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import HomeIcon from "@material-ui/icons/Home"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import SearchIcon from "@material-ui/icons/Search"

import navbarLogo from "../images/logo.jpeg"

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
      setScroll(true) //ya asi xd
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
          <CardMedia
            image={navbarLogo}
            title="logo"
            className={classes.navbarLogo}
          />
          <Link>
            <HomeIcon
              className={(classes.iconSpacing, classes.navbarIcons)}
              color="primary"
              fontSize="large"
            />
          </Link>
          <Typography variant="h5">
            <Link className={classes.linkTypograpy}>ABOUT US</Link>
          </Typography>
          <Typography variant="h5">
            <Link className={classes.linkTypograpy}>Services</Link>
          </Typography>
          <Typography variant="h5">
            <Link className={classes.linkTypograpy}>Team</Link>
          </Typography>
          <Typography variant="h5">
            <Link className={classes.linkTypograpy}>Blog</Link>
          </Typography>
          <Typography variant="h5">
            <Link className={classes.linkTypograpy}>Contact</Link>
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="inherit"
            width="20%"
          >
            <Link>
              <FacebookIcon
                className={(classes.spacing, classes.navbarIcons)}
                color="primary"
                fontSize="large"
              />
            </Link>
            <Link>
              <TwitterIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link>
              <InstagramIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link>
              <LinkedInIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
            <Link>
              <SearchIcon fontSize="large" className={classes.navbarIcons} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar