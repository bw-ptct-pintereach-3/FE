import React from "react";

class BoardFeed extends React.Component {
  render() {
    return (
      <>
        <div className="boards">
          {this.props.boards.map(board => (
            <div className="board-card" key={board.id}>
              <div className="board">
                <h3>
                  {board.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="articles">
          {this.props.articles.map(article => (
            <div className="article-card" key={article.id}>
              <div className="title">
                <h3>{article.title}</h3>
                <p>{article.postedBy}</p>
              </div>

              <a
                href={article.url}
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                {article.url}
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default BoardFeed;