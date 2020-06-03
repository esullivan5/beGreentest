import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { List } from "@material-ui/core";
import DisplayArticle from "../components/DisplayArticle";

// const API = `https://api.earth911.com/earth911.searchArticles?api_key=7827591ea2eb59e9&query=`;
const API = `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=news_desk&fq=environment&api-key=PG5A8XiRNxl8WhFaNTCE8aLD7GDOb3WE&q=`;


class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
      userQuery: "",
      articles: [],
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ userQuery: event.target.value});
  };

  SearchArticles = () => {
    this.setState({ isLoading: true });
    this.setState({ userQuery: "" });
    if (this.state.userQuery === "") {
      return;
    }
    axios.get(API + this.state.userQuery)
    .then(result => {
        console.log(result);
        // console.log(result.data.result);
        // const list = result.data.result.slice(0, 10);
        // console.log(list);
        // this.setState({articles: list});
        console.log(result.data.response.docs);
        const articleList = result.data.response.docs;
        this.setState({articles: articleList});
    })
    .catch(error => this.setState({
      error,
      isLoading: false
    }));
  }

  render(){
      return(
          <div style={{textAlign: "center"}}>
            <TextField style={{marginTop: "15px"}}
              id="standard-name" 
              label="Environmental Search Topic" 
              inputProps={{ 
                style: { 
                  fontFamily: 'Arial', 
                  // color: 'rgb(47,79,79)',
                  fontWeight: 600,
                  fontSize: "20px"
              }}}
              InputLabelProps={{
                style: {
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '100%',
                  // color: '#341a00',
                  fontWeight: 500,
                } }}
              value={this.state.userQuery} 
              onChange={this.handleChange} 
            />
            <br></br>
            <br></br>
            <br></br>
            <button style={{borderRadius: "4px"}} onClick={() => this.SearchArticles()}>Search</button>
            {/* <List> */}
            {/* {this.state.articles.map(article => 
              <DisplayArticle 
                description ={article.description}
                url={article.url}
              />
            )} */}
          
            <List>
              {this.state.articles.map(article => 
              <DisplayArticle 
                description ={article.headline.main}
                url={article.web_url}
                abstract={article.abstract}
              />
            )}
            </List> 
            
          </div>
      )
  }
}
export default Articles;