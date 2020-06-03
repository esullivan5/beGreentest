import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: "2px",
    marginLeft: "10px",
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

function WhyRecycleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">Why Recycle?</Typography>
        <Typography variant="body2">
          To presereve the environment and sustain a stable and funcitonal
          ecosystem.
        </Typography>
      </CardContent>
      <CardActionArea>
        <div>
          <Typography className={classes.heading} pl={4} variant="subtitle1">
            Benefits of Recycling
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body2">
                1. Conserving natural resources
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                2. Protecting ecosystems and wildlife
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                3. Reduces demand for raw materials
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">4. Saves energy</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                5. Cuts climate-changing carbon emissions
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                6. Cheaper than waste collection and disposal
              </Typography>
            </ListItem>
          </List>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default WhyRecycleCard;
