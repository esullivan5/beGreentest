import React from "react";
import { Typography, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "rgba(3, 168, 244, 0.69)",
  },
  typography: {
    padding: theme.spacing(2),
    color: "white",
    // fontWeight: "bold",
  },
  listItem: {
    padding: theme.spacing(0.02),
    color: "white",
  },
  list: {
    marginLeft: "8px",
    paddingLeft: "8px",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Footer() {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Typography
            className={classes.typography}
            variant="h6"
            color="inherit"
          >
            About Us
          </Typography>
          <Typography className={classes.typography}>
            A group of conscious individuals looking to make it easier for each
            and every person do their part for a greener planet. Helping our
            planet can be difficult after all, but it's necessary to keep our
            home safe and healthy. So we're here to help.
          </Typography>
        </Grid>
        <Grid item sm={5}>
          <Typography
            className={classes.typography}
            variant="h6"
            color="inherit"
          >
            Connect with Us
          </Typography>
          <List className={classes.list}>
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Email" />
            </ListItemLink>
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Instagram" />
            </ListItemLink>
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Twitter" />
            </ListItemLink>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
