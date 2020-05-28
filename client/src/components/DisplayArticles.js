import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ArticleCards from "./ArticleCards";

const HeaderContainer = styled.div`
text-align: center;
margin: 100px auto 20px auto;
border: 1px solid #596157;
border-radius: 2px;
padding: 20px;
width: auto;
background-color: #CFD186;
`;
/* border: 1px solid #58718138; */
const WhiteH1 = styled.h1`
  color: #fff;
`;

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
      <HeaderContainer>
        <h1>Some articles that may interest you...</h1>
      </HeaderContainer>
      <ArticleCards
        articlesData = {articlesData}
      />
    </div>
  );
};

export default ApiTest;
