import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
background-color:#552244;
width: 55%;
padding: 2%;
margin: 2% auto;
text-align: left;
color: #fff;
border: 1.4px solid #000;
border-radius: 3px;
`;

const UrlHeader = styled.h2`
    font-size: 1.25rem;
`;

const UserArticleCardMaker = (props) => {

    return (
        <div>
            {props.newArticles.map(newArticle => (
                <div>
                <CardDiv>
                    <UrlHeader>{newArticle.articleUrl}</UrlHeader>
                    <p>{newArticle.category}</p>
                </CardDiv>      
                </div>
            ))}
        </div>
    )
}

export default UserArticleCardMaker;