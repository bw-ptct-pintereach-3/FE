import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCards from "./ArticleCards";

const ApiTest = () => {

  const [articlesData, setArticlesData] = useState([])

  useEffect( () => {
    axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3ANiRLtIDcOCGFU0iqpojDGU1Sa8eDO7") 
      .then(response => {
        console.log('response', response.data.results)
        setArticlesData(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <div>
        <h1>Some articles that may interest you...</h1>
      </div>
      <ArticleCards
        articlesData = {articlesData}
      />
    </div>
  );
};

export default ApiTest;
