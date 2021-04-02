import React from "react";

class SurveyPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          color: 'blue'
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    onRadioChange = (e) => {
        this.setState({
            color: e.target.value
        });
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className = "App">
            <form onSubmit={this.handleSubmit}>
            <strong> What is your favorite shape? </strong>
            <ul>
                <label>
                    <input
                    type="radio"
                    value="red"
                    checked={this.state.color === "blue"}
                    onChange={this.onRadioChange}
                    />
                    <span>Stars are out of this world!</span>
                </label>
            </ul>
            <ul>
                <label>
                    <input
                    type="radio"
                    value="red"
                    checked={this.state.color === "red"}
                    onChange={this.onRadioChange}
                    />
                    <span>I'm very square.</span>
                </label>
            </ul>
            <ul>
                <label>
                    <input
                    type="radio"
                    value="red"
                    checked={this.state.color === "red"}
                    onChange={this.onRadioChange}
                    />
                    <span>A ~petal~ shape</span>
                </label>
            </ul>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

export default SurveyPage;