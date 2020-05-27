import React from "react";
import styled from "styled-components";

const ArticleTitles = styled.h2`
    font-size: 1.5rem;
    line-height: 1.25;
`;

const ArticleCard = styled.div`
    
    background-color:#1d5994;
    width: auto;
    padding: 1%;
    margin: 3% 5%;
    text-align: left;
    color: white;
    border-radius: 5px;
`;

const ArticlePTags = styled.p`
    margin: 2%;
    line-height: 1.25;
`;

const ArticleCards = props => {
    
    return (
        <div>
            {props.articlesData.map( (article) => {
                return (
                    <ArticleCard>
                        <ArticleTitles>{article.title}</ArticleTitles>
                        <ArticlePTags>date: {article.published_date}</ArticlePTags>
                        <ArticlePTags>Abstract: {article.abstract}</ArticlePTags>
                        <ArticlePTags>URL: {article.url}</ArticlePTags>
                    </ArticleCard>
                ) 
            })}
        </div>
    );
};

export default ArticleCards;