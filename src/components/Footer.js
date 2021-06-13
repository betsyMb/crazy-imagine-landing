import React from 'react';

import { Box, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import footerLogo from '../images/logo.jpeg';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1D1D1D',
    color: 'white'
  },
  footerLogo: {
    width: 147,
    height: 78
  },
  sectionTitle: {
    marginBottom: 14,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '59px'
  },
  sectionLink: {
    marginBottom: 18,
    fontSize: 19,
    lineHeight: '21px'
  },
  footerIcons: {
    marginRight: 8,
    marginTop: 16
  },
  formatContactSection: {
    '& $sectionLink': {
      marginBottom: 8
    },
    '& $sectionTitle': {
      lineHeight: 'inherit',
      marginBottom: 4,
      marginTop: 13
    } 
  }
});

const Footer = () => {
  const classes = useStyles();
  return(
   <Box className={classes.root} px={20} py={5}>
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3}>
        <CardMedia
          image={footerLogo}
          title='footerImage'
          className={classes.footerLogo}
        />
        <Box className={classes.formatContactSection}>
            <Typography variant='h3' className={classes.sectionTitle}>CONTACT</Typography>
            <Typography className={classes.sectionLink}><RoomIcon /> Urb Ambroio Plaza #1 street</Typography>
            <Typography className={classes.sectionLink}>House #2/123, San Cristobal, Venezuela.</Typography>
            <Typography className={classes.sectionLink}><PhoneIcon /> +58 414 70079236</Typography>
            <Typography className={classes.sectionLink}><EmailIcon / > contact@crazyimagine.com</Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant='h3' className={classes.sectionTitle}>ABOUT US</Typography>
        <Typography className={classes.sectionLink}>Projects</Typography>
        <Typography className={classes.sectionLink}>Out Team</Typography>
        <Typography className={classes.sectionLink}>About Crazy Imagine</Typography>
      </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant='h3' className={classes.sectionTitle}>COMPANY</Typography>
          <Typography className={classes.sectionLink}>What else we povide</Typography>
          <Typography className={classes.sectionLink}>Our Tecnologies</Typography>
          <Typography className={classes.sectionLink}>Our Stats</Typography>
          <Typography className={classes.sectionLink}>What our clients say</Typography>
        </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant='h3' className={classes.sectionTitle}>GET STARTED</Typography>
        <Typography className={classes.sectionLink}>Contact Us</Typography>
        <Typography className={classes.sectionLink}>Our References</Typography>
        <Typography className={classes.sectionLink}>Last Posts</Typography>
        <Typography ><FacebookIcon className={classes.footerIcons} /> <InstagramIcon className={classes.footerIcons} /> <TwitterIcon className={classes.footerIcons} /> <LinkedInIcon className={classes.footerIcons} /></Typography>
      </Grid>
    </Grid>
   </Box>
  ); 
};

export default Footer;