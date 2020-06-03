import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
    // background: "#00008080",
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
    width: 345,
  },
}));

function LearnMoreCard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">Learn More</Typography>
      </CardContent>
      <CardActionArea>
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "50%" /* 16:9 */,
            paddingTop: 2,
            height: 300,
            // width: 350,
            // height: "300px",
            // width: "350px",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://www.youtube.com/embed/OasbYWF4_S8`}
            frameBorder="0"
          />
        </div>
      </CardActionArea>
    </Card>
  );
}

export default LearnMoreCard;
