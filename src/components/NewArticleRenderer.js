import React, { useState } from "react";
import AddArticle from "./AddArticle";
import UserArticleCardMaker from "./UserArticleCardMaker";

const NewArticleRenderer = () => {
    const [newArticles, setNewArticles] = useState([])

    const handleFormSubmission = (newArticle) => {
        setNewArticles([...newArticles, newArticle])
    };

    return (
        <div>
            <AddArticle handleFormSubmission={handleFormSubmission} />
            <UserArticleCardMaker newArticles={newArticles} />
        </div>
    );
};


export default NewArticleRenderer;