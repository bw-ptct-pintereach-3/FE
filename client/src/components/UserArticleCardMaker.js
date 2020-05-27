import React from "react";

const UserArticleCardMaker = (props) => {
    return (
        <div>
            {props.newArticles.map(newArticle => (
                <div>
                    <h2>{newArticle.articleUrl}</h2>
                    <p>{newArticle.category}</p>
                </div>      
            ))}
        </div>
    )
}

export default UserArticleCardMaker;