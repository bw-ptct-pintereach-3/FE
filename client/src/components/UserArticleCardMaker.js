import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
background-color:#1d5994;
width: 50%;
padding: 2%;
margin: 2% auto;
text-align: left;
color: white;
border-radius: 5px;
`;

const UrlHeader = styled.h2`
    font-size: 1.25rem;
`;

const UserArticleCardMaker = (props) => {
    return (
        <div>
            {props.newArticles.map(newArticle => (
                <CardDiv>
                    <UrlHeader>{newArticle.articleUrl}</UrlHeader>
                    <p>{newArticle.category}</p>
                </CardDiv>      
            ))}
        </div>
    )
}

export default UserArticleCardMaker;