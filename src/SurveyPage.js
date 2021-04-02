import React, { Component } from "react";
import {Link } from "react-router-dom";
class SurveyPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      questionBank: []
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }


  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
        <form onSubmit={this.formSubmit}>
            <strong> What is your favorite shape?</strong>
            <div id = "q1">
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Van Gogh"
                    checked={this.state.selectedOption === "Van Gogh"}
                    onChange={this.onValueChange}
                    name = "question1"
                />
                Stars are out of this world!
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Matisse"
                    checked={this.state.selectedOption === "Matisse"}
                    onChange={this.onValueChange}
                    name = "question1"
                />
                I'm very square.
                </label>
            </div>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Monet"
                    checked={this.state.selectedOption === "Monet"}
                    onChange={this.onValueChange}
                    name = "question1"
                />
                The shape of ~petals~
                </label>
            </div>
            <div>
                <h3>Your selected artist is : {this.state.selectedOption} </h3>
            </div>
            
          <Link to="/"><button className="btn btn-default" type="submit">
            Back to home
          </button></Link>
          </div>
        </form>
    );
  }
}

export default SurveyPage;