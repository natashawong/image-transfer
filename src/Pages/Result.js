import React, { Component } from "react";
import "./Stylesheet.css";

import { connect } from "react-redux";
import Button from '../ExampleButton';

import {SPACING, TEXTSIZE, COLOURS} from '../styles';

export class Result extends Component {
    componentDidMount() {
        console.log(this.props.result.data)
    }

    render() {
        return(
            <div style={{margin: SPACING.PAGE, marginTop: SPACING.SECTIONS}}>
                <div style={{display: "flex", textAlign: "center", flexDirection: "column", paddingBottom: SPACING.SECTIONS}}>
                    <p style={{fontSize: TEXTSIZE.LARGE, margin: 0, fontWeight: "bold"}}>Famous Filters</p>
                    <p style={{fontSize: TEXTSIZE.MEDIUM}}>Output</p>
                </div>

                <div className="imageRow">
                    <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                        Original Image
                        <br/> <br/>
                        <img src={this.props.original.data} style={{ maxWidth: "500px", maxHeight: "500px" }}/>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                        Stylized Image
                        <br/><br/>
                        <img src={this.props.result.data} style={{ maxWidth: "500px", maxHeight: "500px" }}/>
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", margin: SPACING.PAGE}}>
                    <Button link="/" buttonStyle={{paddingLeft: SPACING.SECTIONS, paddingRight: SPACING.SECTIONS, borderRadius: 6, fontSize: TEXTSIZE.SMALL}}> Home </Button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    result: state.result,
    original: state.original,
});  

export default connect(mapStateToProps)(Result);