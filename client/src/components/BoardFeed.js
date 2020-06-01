import React from "react";
import styled from "styled-components";
import { RemoveCircleOutline } from "@styled-icons/material/RemoveCircleOutline";

const RemoveCircleOutlineRed = styled(RemoveCircleOutline)`
  color: #552244;
  height: 20px;
  width: 20px;
  cursor: pointer;
  padding-left: 5px;
  float: right;
`;

class BoardFeed extends React.Component {
  state = {
    deletingArticle: null
  };

  deleteArticle = (id) => {
    this.setState({ deletingArticle:id});
    this.props.deleteArticle(id);
  };
  render() {
    return (
      <>
        <div className="boards">
          {this.props.boards.map(board => (
            <div className="board-card" key={board.id}>
              <div className="board">
                <h3>
                  {board.id}
                </h3>
                <h3>
                {board.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="articles">
          {this.props.articles.map(article => (
            <div className="article-card" key={article.id}>
              <div className="title">
                <h3>Category ID:{article.category_id}</h3>
                <p>User ID:{article.user_id}</p>
              </div>
              <a href={article.url}>
              {article.url}
              </a>
              <RemoveCircleOutlineRed
              onClick={() => this.deleteArticle(article.id)}
            />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default BoardFeed;