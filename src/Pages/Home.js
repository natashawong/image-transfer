import React, { Component } from "react";
import {Link}  from "react-router-dom";
import "./Home.css";

export default class SurveyPage extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div>
                <p>Famous Filters</p>
                <p>Apply a filter with a beautiful famous painting!</p>

                <div>
                    <p>Let's get started! Which artist style do you want to use?</p>
                    
                    <div className="imageRow">
                        {/* image 1 2 3, float horizontal */}
                    </div>
                    {/* button - ready? */}

                    <p>Not sure what to choose?</p>
                    {/* button - take a quiz */}
                </div>

                <div>
                    <p>About:</p>
                    <p>
                        a bunch of about text.
                    </p>
                </div>

                <div>
                    <p>Example outcome with a sample style image:</p>
                    <div className="imageRow">
                        {/* image */}
                        <p>+</p>
                        {/* image */}
                        <p>=</p>
                        {/* image */}
                    </div>
                </div>

            </div>
        )
    }
}