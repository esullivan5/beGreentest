import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";

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
  cardAction: {
    // backgroundColor: "#008B8B",
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function RecycleLocationCard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">Find Recyle Locations Near You</Typography>
        <Typography variant="body2">
          Does your community not have a recycle center? No problem. Search for
          one here and do your part.
        </Typography>
      </CardContent>
      <CardActionArea className={classes.cardAction}>
        <div>
          <ListItemLink href="/maps">
            <ListItemText primary="Search >>" />
          </ListItemLink>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default RecycleLocationCard;
