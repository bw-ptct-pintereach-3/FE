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

const DeleteButton = styled.button`
    width: auto;
    height: auto;
    padding: 1% 6%;
    margin-left: 75%;
    border: 1px solid white;
    border-radius: 3px;
`;

const UserArticleCardMaker = (props) => {

    return (
        <div>
            {props.newArticles.map(newArticle => (
                <div>
                <CardDiv>
                    <UrlHeader>{newArticle.articleUrl}</UrlHeader>
                    <p>{newArticle.category}</p>
                    <DeleteButton>Delete</DeleteButton>
                </CardDiv>      
                </div>
            ))}
        </div>
    )
}

export default UserArticleCardMaker;