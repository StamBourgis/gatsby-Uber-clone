import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./Social";
import MenuTabs from "./card/Tabs"
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import { StaticImage } from "gatsby-plugin-image";
import CardComp from "./card/OrderCard";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
  },
  content: {
    height: "100%",
    zIndex: 3,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "90%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  heroImage: {
    height: "90%",
    width: "100%",
    zIndex: 1,
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return (
    <Paper className={styles.section}>
      <StaticImage
        className={styles.heroImage}
        src = "https://images.unsplash.com/photo-1553597799-da14bf89e386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
        alt=""
        style={{ position: "absolute" }}
      />
      {/* remove this div for brighter  */}
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hi, welcome to my Uber clone webapp!
              </Typography>
              <Typography variant="h5">
                I build websites, web applications and responsive user
                interfaces. 
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:stam.bourgkis@gmail.com"
                  variant="contained"
                  color="secondary"
                >
                  Get in Touch!
                </Button>
              </Box>
              <MenuTabs/>
            </Grid>
          </Zoom>
          <Hidden xsDown>
            <Grid item>
              {/* <Social direction="column" /> */}
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}