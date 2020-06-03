import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
    // background: "#008080",
    // maxWidth: 345,
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
    width: 345,
  },
  expansionPanel: {
    // backgroundColor: "#008B8B",
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function RecycleInfoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">How To Recycle</Typography>
        <Typography variant="body2">
          Recycling can be confusing. Can you recycle this or that? Where does
          it go? But there's no need to stress anymore. Get your answers here.
        </Typography>
      </CardContent>
      <CardActionArea>
        <div>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Materials</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItemLink href="http://www.statemetalindustries.com/types-aluminum-products-can-recycled/">
                  <ListItemText primary="Aluminum" />
                </ListItemLink>
                <ListItemLink href="https://www.recycleandrecoverplastics.org/consumers/kids-recycling/plastics-can-become/">
                  <ListItemText primary="Plastic" />
                </ListItemLink>
                <ListItemLink href="https://www.azocleantech.com/article.aspx?ArticleID=585">
                  <ListItemText primary="Other >>" />
                </ListItemLink>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default RecycleInfoCard;
