import React from "react";
import styled from "styled-components";

const ArticleCard = styled.div`
    background-color: #552244;
    width: auto;
    padding: 1%;
    margin: 3% 5%;
    text-align: left;
    color: #fff;
    border: 1.4px solid #000;
    border-radius: 3px;
`;
/* background-color:#1d5994; */

const ArticleTitles = styled.h2`
    font-size: 1.5rem;
    line-height: 1.25;
`;

const ArticlePTags = styled.p`
    margin: 2%;
    line-height: 1.25;
`;

const ArticleLinks = styled.a`
    color: #fff;
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
                        <ArticlePTags>URL: <ArticleLinks href={article.url} target="_blank">{article.url}</ArticleLinks></ArticlePTags>
                    </ArticleCard>
                ) 
            })}
        </div>
    );
};

export default ArticleCards;