import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import owlImage from "./owlartcraft.jpg";
import bottleHolder from "./bottleholder.jpg";
import birdFeeder from "./bird-feeder-1.jpg";
import minionFlowerPlanterPot from "./minion-flower-planter-pot.jpg";
import tirePlanter from "./tire-project.jpg";
import lightBulb from "./light-bulb-art.png";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
    // background: "#008080",
    // maxWidth: 345,
    textAlign: "center",
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
    width: 345,
  },
  carouselInner: {
    height: "250px",
    AlignItems: "center",
    justifyContent: "center",
  },
  carouselImage: {
    height: "200px",
    width: "200px",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  imageHeader: {
    marginTop: "6px",
  },
}));

function RecycleProjects() {
  const classes = useStyles();
  var items = [
    {
      name: "Owl Decoration Project",
      image: owlImage,
    },
    {
      name: "Pen Holder Project",
      image: bottleHolder,
    },
    {
      name: "Bird Feeder Project",
      image: birdFeeder,
    },
    {
      name: "Minion Flower Planter Pot Project",
      image: minionFlowerPlanterPot,
    },
    {
      name: "Tire Planters Project",
      image: tirePlanter,
    },
    {
      name: "Light Bulb Art Project",
      image: lightBulb,
    },
  ];

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">Recycle Projects</Typography>
      </CardContent>
      <CardActionArea>
        <div>
          <Carousel>
            {items.map((item) => (
              <Item item={item} />
            ))}
          </Carousel>
        </div>
      </CardActionArea>
    </Card>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.carouselInner}>
      <img
        src={props.item.image}
        alt="recycle project"
        className={classes.carouselImage}
      />
      <h6 className={classes.imageHeader}>{props.item.name}</h6>
    </Paper>
  );
}

export default RecycleProjects;
