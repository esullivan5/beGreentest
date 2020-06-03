import React from "react";
import { Typography, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import CachedIcon from '@material-ui/icons/Cached';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function DisplayArticle(props) {
  return (
    <ListItem style={{fontWeight: 700}}> 
      <ListItemIcon style={{color: "green"}}>
        <CachedIcon />
      </ListItemIcon> 
      <ListItemLink  href={props.url} target= "_blank" style={{display: "block", width: "100%", fontWeight: "bolder" }}>
         <ListItemText disableTypography variant="h4" primary={props.description}/>   
      <ListItemText
        // primary={props.url}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body1"
              color="textPrimary"
            >
              Abstract: 
            </Typography>
            {" " + props.abstract}
          </React.Fragment>
        }
      /> 
      </ListItemLink>  
    </ListItem>  
  );
}

export default DisplayArticle;