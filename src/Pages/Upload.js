import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import loading from "../loading.gif";
import Button from "../ExampleButton.js";
import "./Stylesheet.css";

import { SPACING, TEXTSIZE, COLOURS } from "../styles";

import { connect } from "react-redux";
import { setResult, setOriginal} from '../actions';

const axios = require("axios");

const download = e => {
  console.log(e.target.href);
  fetch(e.target.href, {
    method: "GET",
    headers: {}
  })
    .then(response => {
      response.arrayBuffer().then(function(buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch(err => {
      console.log(err);
    });
};

document.body.style = 'background: #fcf2f7;';

export class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDisplay: null,
      imageRaw: null,
      isLoading: true,
      isUploaded: false,
      isSubmitted: false,
      result: null,
    };
  }

  testChange = () => {
    window.alert("Style is: " + this.props.selectedStyle.data);
  };

  handleChange = (event) => {
    this.setState({
      imageDisplay: URL.createObjectURL(event.target.files[0]),
      imageRaw: event.target.files[0],
      isUploaded: true,
    });
    this.props.setOriginal(URL.createObjectURL(event.target.files[0]))
  };

  handleSubmit(event) {
    alert("Your response was submitted: " + this.state.value);
    event.preventDefault();
  }

  onClick = () => {
    const formData = new FormData();
    this.setState({
      isSubmitted: true,
      isUploaded: false,
    });
    formData.append("image", this.state.imageRaw);
    formData.append("style", this.props.selectedStyle.data);

    axios
      .post("http://a000ce992564.ngrok.io/stylize", formData)
      .then(() => this.setState({ 
        result: "http://a000ce992564.ngrok.io/result",
        isLoading: false
      }))
  };

  // TODO: add error if waiting for more than 30 sec
  uploadScreen = () => {
    return (
      <div className="alignPhotoText" >
        {this.state.isLoading ? (
          <div className="loading">
            <p>Our model is hard at work...</p>
            <img src={loading} alt="loading..." style={{ width: 300 }} />
          </div>
        ) : (
          <img style={{maxHeight: "300", maxWidth: "300"}} src={this.state.result}/>
        )}
      </div>
    );
  };

  render() {
    return (
      <div style={{padding: SPACING.PAGE, paddingTop: SPACING.SECTIONS}}>

        <div className="alignPhotoText">
          <h1 style={{ fontSize: TEXTSIZE.LARGE, margin: 0, fontWeight: "bold" }}>
            Upload image for stylizing
          </h1>

          <div id="inputs" style = {{padding: SPACING.SECTIONS}}>
            <input
              type="file"
              encType="multipart/form-data"
              accept="image/jpeg, image/png"
              name="image"
              id="file"
              onChange={this.handleChange}
            />

            <button onClick={this.onClick} disabled={!this.state.isUploaded}>
              Style your image!
            </button>

          </div>
        </div>
        {this.state.isSubmitted ? this.uploadScreen() : null}

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: SPACING.SECTIONS}}>
          <button id="ngrok" link={"http://a000ce992564.ngrok.io/result"}
          download
          buttonStyle={{paddingLeft: SPACING.SECTIONS, paddingRight: SPACING.SECTIONS, borderRadius: 6, fontSize: TEXTSIZE.SMALL}}
          onClick={e => download(e)}>
          <i className="fa fa-download" />Download
          </button>
        </div>

        <Button 
          link="/"
          style={{paddingTop: SPACING.SECTIONS}}
          buttonStyle={{paddingLeft: SPACING.SECTIONS, paddingRight: SPACING.SECTIONS, borderRadius: 6, fontSize: TEXTSIZE.SMALL}}
        >
          Back to Home
        </Button>

      </div>
    );
  }
}

const addRouter = withRouter(Upload);

const mapStateToProps = (state) => ({
  selectedStyle: state.selectedStyle,
});

export default connect(
  mapStateToProps, { setResult, setOriginal }
)(Upload);

