import React, { Component } from "react";
import {Link}  from "react-router-dom";
import Button from "../ExampleButton.js";

import "./Stylesheet.css";

import { SPACING, TEXTSIZE, COLOURS } from "../styles";
import { connect } from "react-redux";
import { setStyle } from '../actions';

export class SurveyPage extends Component {
    constructor() {
        super();
        this.state = {
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            selectedStyle: "",
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
        const artists = ["matisse", "van_gogh", "monet"]
        const bios = ["You got Matisse! This French artist was best known for his vibrant colors and multimedia work. He frequently painted the gorgeous French views he was surrounded by and invented creative shapes. Your stylized images reflect the vibrance and symbolic nature of Matisse's work.",
                    "You got Van Gogh! This prolific artist was best known for his still lifes and breathtaking landscapes. He suffered a life rife with mental illness and died young; we can see that his painting was an outlet for his emotions. Your images will reflect turbulence and melancholy within Van Gogh's art.",
                    "You got Monet! This French painter was hailed as a founder of Impressionism, a style characterized by small brushstrokes and accurate portrayal of light. Some of Monet's best known works are a series of water lillies from the water garden he created by his own French home. Your stylized images will reflect the detail and soft tone of Monet's work."]
        const scores = [0,0,0];

        {/* Accounts for edge case when user doesn't submit a question */}
        if (this.state.question1 === "") {
            alert("Select an answer for question 1");
        } else if (this.state.question2 === "") {
            alert("Select an answer for question 2");
        } else if (this.state.question3 === "") {
            alert("Select an answer for question 3");
        } else if (this.state.question4 === "") {
            alert("Select an answer for question 4");
        } else {
            {/* Calculates point values */}
            console.log("these are the artists" + artists);
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
        this.setState({
            selectedStyle: artists[this.indexOfMax(scores)],
            answer: bios[this.indexOfMax(scores)]
        })
        console.log(artists[this.indexOfMax(scores)])
        this.props.setStyle(artists[this.indexOfMax(scores)])
      }

        indexOfMax(arr) {
            {/* Gets the maximum artist index in array */}
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
            <div style={{margin: SPACING.PAGE, marginTop: SPACING.SECTIONS}}>

                <div style={{display: "flex", textAlign: "center", flexDirection: "column", paddingBottom: SPACING.SECTIONS}}>
                    <p style={{fontSize: TEXTSIZE.LARGE, margin: 0, fontWeight: "bold"}}>Famous Filters</p>
                    <p style={{fontSize: TEXTSIZE.MEDIUM}}>Quiz: Which famous artist are you?</p>
                </div>

                <div style={{paddingLeft: SPACING.PAGE*1.5}}>
                    <form onSubmit={this.formSubmit}>
                    <p style={{fontSize: TEXTSIZE.SMALL, fontWeight: "bold"}}> What is your favorite shape?</p>
                    <div onChange={this.onChangeValue} style={{fontSize: TEXTSIZE.SMALL, paddingBottom: 30}}>
                        <input type="radio" value="van_gogh" name="q1"  /> Stars are out of this world! <br />
                        <input type="radio" value="matisse" name="q1" /> I'm very square. <br />
                        <input type="radio" value="monet" name="q1" /> The shape of ~petals~
                    </div>

                    <p style={{fontSize: TEXTSIZE.SMALL, fontWeight: "bold"}}> What is your most recently used emoji? 🧑‍🎨</p>
                    <div onChange={this.onChangeValue2} style={{fontSize: TEXTSIZE.SMALL, paddingBottom: 30}}>
                        <input type="radio" value="monet" name="q2" /> 🧐 <br />
                        <input type="radio" value="matisse" name="q2" /> 🤪 <br />
                        <input type="radio" value="monet" name="q2" /> 🤩
                    </div>

                    <p style={{fontSize: TEXTSIZE.SMALL, fontWeight: "bold"}}> What color scheme do you like?</p>
                    <div onChange={this.onChangeValue3} style={{fontSize: TEXTSIZE.SMALL, paddingBottom: 30}}>
                        <input type="radio" value="van_gogh" name="q3" /> Cold blue tones <br />
                        <input type="radio" value="matisse" name="q3" /> Neons <br />
                        <input type="radio" value="monet" name="q3" /> Hazy pastels
                    </div>

                    <p style={{fontSize: TEXTSIZE.SMALL, fontWeight: "bold"}}> What is your dream vacation spot?</p>
                    <div onChange={this.onChangeValue4} style={{fontSize: TEXTSIZE.SMALL, paddingBottom: 30}}>
                        <input type="radio" value="van_gogh" name="q4" /> Cabin in the woods <br />
                        <input type="radio" value="monet" name="q4" /> Lake retreat <br />
                        <input type="radio" value="matisse" name="q4" /> Beach
                    </div>

                    
                    <button className="btn btn-default" type="submit" >
                        Submit
                    </button>

                    {this.state.answer == "" ? null :
                        <div>
                            <p style={{fontSize: TEXTSIZE.MEDIUM, fontWeight: "bold"}}>Result</p>
                            <p style={{fontSize: TEXTSIZE.SMALL}}>{this.state.answer}</p>
                        </div>
                    }

                    <Button link="/upload" style={{paddingTop: SPACING.SECTIONS}} buttonStyle={{paddingLeft: SPACING.SECTIONS, paddingRight: SPACING.SECTIONS, borderRadius: 6, fontSize: TEXTSIZE.SMALL}}> Use this artist </Button>
                    <Button link="/" style={{padding: SPACING.SECTIONS}} buttonStyle={{paddingLeft: SPACING.SECTIONS, paddingRight: SPACING.SECTIONS, borderRadius: 6, fontSize: TEXTSIZE.SMALL}}>Back to Home</Button>
                
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    null, 
    { setStyle }
)(SurveyPage);
