import React from "react"

import { Box, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CodeIcon from "@material-ui/icons/Code"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

import background from "../images/fondo.jpg"
import "../css/typography.css"
import HomeCard from "./HomeCard"

const useStyles = makeStyles(theme => ({
  imageSize: {
    width: "100%",
    height: 1000,
    borderRadius: "0% 0% 70% 70% / 0% 0% 30% 30% ",
    [theme.breakpoints.down("md")]: {
      borderRadius: 0,
    },
  },
  title: {
    fontSize: 44,
    fontFamily: "gotham-book",
    color: "white",
    textTransform: "uppercase",
  },
  mainTitle: {
    fontSize: 76,
    fontFamily: "Gotham-Black",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "gotham-Medium",
    color: "white",
    lineHeight: "22px",
    maxWidth: 552,
  },
  cardIcon: {
    fontSize: 64,
  },
  cardCenter: {
    backgroundColor: "#23aae1",
  },
  cardContainer: {
    gap: 30,
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
    },
  },
}))

const HomeMainSection = ({ title, mainTitle, description }) => {
  const classes = useStyles()

  return (
    <Box>
      <CardMedia
        image={background}
        title="imageMainSection"
        className={classes.imageSize}
      >
        <Box
          height="100vh"
          width="70%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mx="auto"
          textAlign="center"
          className={classes.boxContainer}
        >
          <Typography variant="h2" color="secondary" className={classes.title}>
            {title}
          </Typography>

          <Typography
            variant="h1"
            color="secondary"
            className={classes.mainTitle}
          >
            {mainTitle}
          </Typography>

          <Typography
            variant="h6"
            color="secondary"
            className={classes.subTitle}
          >
            {description}
          </Typography>
        </Box>
      </CardMedia>
      <Grid container className={classes.cardContainer}>
        <Grid item xs="auto">
          <HomeCard
            title="Code"
            description="Our field of appliance involves using cutting-edge technologies such as PHP7, HTML5, JavaScript, CSS3, WordPress, and Angular: amongst others."
            Icon={AccountCircleIcon}
          />
        </Grid>
        <Grid item xs="auto">
          <HomeCard
            title="User Experience"
            description="Out philosophy goes hand in hand with user interface satisfaction and exellence."
            Icon={CodeIcon}
          />
        </Grid>
        <Grid item xs="auto">
          <HomeCard
            title="Quality"
            description="We are the best so tha's why offer you 100% quality in our services"
            Icon={ArrowUpwardIcon}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeMainSection
