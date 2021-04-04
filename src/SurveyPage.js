import React, { Component } from "react";
import {Link } from "react-router-dom";
class SurveyPage extends Component {
  constructor() {
    super();
    this.state = {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }


  onValueChange = (event, question) => {
    switch(question) {
      case 1:
        this.setState({question1: event.target.value})
      case 2:
        this.setState({question2: event.target.value})
      case 3:
        this.setState({question3: event.target.value})
      case 4:
        this.setState({question4: event.target.value})
    } 
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
        <form onSubmit={this.formSubmit}>
            <strong> What is your favorite shape?</strong>
            <div onChange={this.onValueChange(1)}>
            <div className="radio">
                <label>
                <input
                    type="radio"
                    value="Van Gogh"
                    checked={this.state.question1 === "Van Gogh"}
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
                    checked={this.state.question1 === "Matisse"}
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
                    checked={this.state.question1 === "Monet"}
                    onChange={this.onValueChange}
                    name = "question1"
                />
                The shape of ~petals~
                </label>
            </div>
            <div>
                <h3>Your selected artist is : {this.state.question1} </h3>
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