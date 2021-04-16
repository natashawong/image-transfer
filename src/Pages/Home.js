import React, { Component } from "react";
import Button from "../ExampleButton.js";
import "./Stylesheet.css";

import vanGogh from '../Assets/van_gogh.jpg';
import matisse from '../Assets/matisse.jpg';
import monet from '../Assets/monet.jpg';
import orig from '../Assets/orig.jpg';
import result from '../Assets/result.png';

import {SPACING, TEXTSIZE, COLOURS} from '../styles';

import { connect } from 'react-redux';
import { setStyle } from '../actions';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            selectedStyle: "",
        }
    }

    select(selectedStyle) {
        this.setState({selectedStyle: selectedStyle})
        this.props.setStyle(selectedStyle);
    }

    render() {
        {/* stores choice of artist to use in upload page */}
        const OPTIONS = {
            VANGOGH: "van_gogh",
            MATISSE: "matisse",
            MONET: "monet",
        }

        return(
            <div style={{margin: SPACING.PAGE}}>
                <div style={{display: "flex", textAlign: "center", flexDirection: "column", paddingBottom: 50}}>
                    <p style={{fontSize: TEXTSIZE.LARGE, margin: 0, fontWeight: "bold"}}>Famous Filters</p>
                    <p style={{fontSize: TEXTSIZE.MEDIUM}}>Apply a filter with a beautiful famous painting!</p>
                </div>

                <div>
                    <p style={{fontSize: TEXTSIZE.SMALL, fontWeight: "bold"}}>Let's get started! Which artist style do you want to use?</p>
                    
                    {/* displays images of the artist style we use in model for the user */}
                    <div className="imageRow">
                        <div className="styleImageChoice" onClick={() => this.select(OPTIONS.VANGOGH)} >
                        <div style={this.state.selectedStyle == OPTIONS.VANGOGH ? {backgroundColor: COLOURS.LIGHTPINK} : null}>
                        <img src={vanGogh} alt="Van Gogh" className="styleImage"/>
                        </div>
                        <p style={{fontSize: TEXTSIZE.SMALL}}>Van Gogh</p>
                        </div>

                        <div className="styleImageChoice" onClick={() => this.select(OPTIONS.MATISSE)}>
                        <div style={this.state.selectedStyle == OPTIONS.MATISSE ? {backgroundColor: COLOURS.LIGHTPINK} : null}>
                        <img src={matisse} alt="Matisse" className="styleImage"/>
                        </div>
                        <p style={{fontSize: TEXTSIZE.SMALL}}>Matisse</p>
                        </div>

                        <div className="styleImageChoice" onClick={() => this.select(OPTIONS.MONET)}>
                        <div style={this.state.selectedStyle == OPTIONS.MONET ? {backgroundColor: COLOURS.LIGHTPINK} : null}>
                        <img src={monet} alt="Monet" className="styleImage"/>
                        </div>
                        <p style={{fontSize: TEXTSIZE.SMALL}}>Monet</p>
                        </div>
                    </div>
                    <Button link="/upload"> Ready? </Button>
                    

                    <p style={{fontSize: TEXTSIZE.MEDIUM, fontWeight: "bold"}}>Not sure what to choose?</p>
                    <Button link="/quiz"> Take a quiz </Button>
                    
                </div>

                {/* ABOUT PAGE */}
                <div>
                    <p style={{fontSize: TEXTSIZE.MEDIUM, fontWeight: "bold"}}>About:</p>
                    <p style={{fontSize: TEXTSIZE.SMALL}}>
                        Our goal is to apply a cool filter on your image, using a famous artist's style.  Here's how it works:
                    </p>
                </div>

                <div>
                    <p style={{fontSize: TEXTSIZE.MEDIUM, fontWeight: "bold", fontStyle: "italic"}}>Example outcome with a sample style image:</p>
                    <div className="imageRow">
                        <div className="alignPhotoText">
                        <img src={orig} alt="Original" className="styleImage"/>
                        <p style={{fontSize: TEXTSIZE.SMALL, fontStyle: "italic"}}>Selfie</p>
                        </div>

                        <p style={{fontSize: TEXTSIZE.LARGE}}>+</p>

                        <div className="alignPhotoText">
                        <img src={vanGogh} alt="Van Gogh" className="styleImage"/>
                        <p style={{fontSize: TEXTSIZE.SMALL, fontStyle: "italic"}}>Van Gogh</p>
                        </div>

                        <p style={{fontSize: TEXTSIZE.LARGE}}>=</p>

                        <div className="alignPhotoText">
                        <img src={result} alt="Result" className="styleImage"/>
                        <p style={{fontSize: TEXTSIZE.SMALL, fontStyle: "italic"}}>Stylized Image</p>
                        </div>
                    </div>
                    <p style={{fontSize: TEXTSIZE.SMALL}}>
                        The user inputs an image and selects an artist style they want (Van Gogh, Matisse, or Monet). The result is your image with the famous artist's style!
                    </p>
                </div>
                

            </div>
        )
    }
}

export default connect(
    null, 
    { setStyle }
)(Home);
