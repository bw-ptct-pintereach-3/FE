import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import styled from "styled-components";
import { Pin } from "@styled-icons/boxicons-solid/Pin";
import { addStudy } from "../actions";

const PinRed = styled(Pin)`
  color: #552244;
  height: 30px;
  width: 30px;
  transform: rotate(-20deg);
`;

class AddStudyForm extends React.Component {
  state = {
    study: {
      id: "",
      url: "",
      user_id: "",
      category_id: ""
    }
  };

  changeHandler = e => {
    this.setState({
      study: {
        ...this.state.study,
        [e.target.name]: e.target.value,
        user_id: this.props.id
      }
    });
  };

  addStudy = e => {
    e.preventDefault();
    this.props.addStudy(this.state.study);
    this.props.history.push("/home");
    this.setState({
      study: {
        id: this.props.id,
        url: "",
        user_id: this.props.id,
        category_id: "",
      }
    });
  };

  render() {
    return (
      <>
        <div className="main">
          <div className="add-study-form">
            <form onSubmit={this.addStudy}>
              <h1>
                <PinRed /> Add Pins to a Board
              </h1>
              <h2>Category Numbers</h2>
              <ol>
                <li>1 = Education</li>
                <li>2 = Recreation</li>
                <li>3 = Cooking</li>
                <li>4 = Shopping</li>
                <li>5 = Technology</li>
                <li>6 = Entertainment</li>
                <li>7 = Professional</li>
                <li>8 = Health</li>
                <li>9 = Sports</li>
                <li>10 = Other</li>
              </ol>

              <input
                type="url"
                name="url"
                placeholder="URL"
                onChange={this.changeHandler}
                value={this.state.study.url}
                required
              />
              
              <input
                type="number"
                name="category_id"
                placeholder="Category"
                onChange={this.changeHandler}
                value={this.state.study.category_id}
                required
              />

              <button>
                {/* {this.props.addingStudy ? ( */}
                  {this.props.addStudy ? (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={18}
                    width={18}
                  />
                ) : (
                  "Add Pin"
                )}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

// const mapStateToProps = ({ addingStudy, id }) => ({
//   addingStudy,
//   id
// });

const mapStateToProps = ({ addStudy, id }) => ({
  addStudy,
  id
});

export default connect(
  mapStateToProps,
  { addStudy }
)(AddStudyForm);