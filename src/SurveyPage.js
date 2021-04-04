import React, { Component } from "react";
import {Link } from "react-router-dom";

export default class SurveyPage extends Component {
    constructor() {
        super();
        this.state = {
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            answer: "",
        }
        this.formSubmit = this.formSubmit.bind(this);
        console.log("Starting");
    }
    
    onChangeValue = (event) => {
        this.setState({question1: event.target.value})
    }

    onChangeValue2 = event => {
        this.setState({question2: event.target.value})
    }

    onChangeValue3 = event => {
        this.setState({question3: event.target.value})
    }

    onChangeValue4 = event => {
        this.setState({question4: event.target.value})
    }

    formSubmit(event) {
        event.preventDefault();
        const artists = ["Matisse", "Van Gogh", "Monet"];
        const scores = [0,0,0];

        if (this.state.question1 === "") {
            alert("Select an answer for question 1");
        } else if (this.state.question2 === "") {
            alert("Select an answer for question 2");
        } else if (this.state.question3 === "") {
            alert("Select an answer for question 3");
        } else if (this.state.question4 === "") {
            alert("Select an answer for question 4");
        } else {
            console.log("these r the artists" + artists);
            {artists.map((artist, index) => {
                if (this.state.question1 === artist) {
                    scores[index] += 1
                }
                if (this.state.question2 === artist) {
                    scores[index] += 1
                } 
                if (this.state.question3 === artist) {
                    scores[index] += 1
                } 
                if (this.state.question4 === artist) {
                    scores[index] += 1
                } 
            })}
        }
        
        
        
        console.log("Submitting");
        console.log(scores);
        console.log("Max artist:" + this.indexOfMax(scores));
        this.setState({answer: artists[this.indexOfMax(scores)]})
        console.log(this.state.answer);
      }

    indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    }

    render() {
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                <strong> What is your favorite shape?</strong>
                <div onChange={this.onChangeValue}>
                    <input type="radio" value="Van Gogh" name="q1"  /> Stars are out of this world!
                    <br />
                    <input type="radio" value="Matisse" name="q1" /> I'm very square.
                    <br />
                    <input type="radio" value="Monet" name="q1" /> The shape of ~petals~
                </div>

                <strong> What is your most recently used emoji? 🧑‍🎨</strong>
                <div onChange={this.onChangeValue2}>
                    <input type="radio" value="Monet" name="q2" /> 🧐
                    <br />
                    <input type="radio" value="Matisse" name="q2" /> 🤪
                    <br />
                    <input type="radio" value="Monet" name="q2" /> 🤩
                </div>

                <strong> What color scheme do you like?</strong>
                <div onChange={this.onChangeValue3}>
                    <input type="radio" value="Van Gogh" name="q3" /> Cold blue tones
                    <br />
                    <input type="radio" value="Matisse" name="q3" /> Neons
                    <br />
                    <input type="radio" value="Monet" name="q3" /> Hazy pastels
                </div>

                <strong>What is your dream vacation spot?</strong>
                <div onChange={this.onChangeValue4}>
                    <input type="radio" value="Van Gogh" name="q4" /> Cabin in the woods
                    <br />
                    <input type="radio" value="Monet" name="q4" /> Lake retreat
                    <br />
                    <input type="radio" value="Matisse" name="q4" /> Beach
                </div>

                
                <button className="btn btn-default" type="submit">
                    Submit
                </button>
                <div>
                    <h3>The artist you're most like is : {this.state.answer} </h3>
                </div>
                <Link to="/">
                <button className="btn btn-default">
                    Back to Home
                </button></Link>
               
                </form>
            </div>
        )
    }
}