import React from "react";
import styled from "styled-components";
import { RemoveCircleOutline } from "@styled-icons/material/RemoveCircleOutline";


const RemoveCircleOutlineRed = styled(RemoveCircleOutline)`
  color: red;
  height: 20px;
  width: 20px;
  cursor: pointer;
  padding-left: 5px;
  float: right;
`;

class ArticleFeed extends React.Component {
  state = {
    deletingArticle: null
  };

  deleteArticle = (id, user_id) => {
    this.setState({ deletingArticle: id });
    this.props.deleteArticle(id, user_id);
  };
  render() {
    return (
      <div className="articles">
        {this.props.articles.map(article => (
          <div className="article-card" key={article.id}>
            <div className="title">
              <h3>{article.title}</h3>
              <p>@{article.postedBy}</p>
            </div>
            <a
              href={article.url}
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              {article.url}
            </a>

            <RemoveCircleOutlineRed
              onClick={() => this.deleteArticle(article.id, article.userid)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleFeed;