import React, { Component } from "react";
import { Link } from "react-router-dom";
import loading from "../loading.gif";
import vanGogh from "../Assets/van_gogh.jpg";
import matisse from "../Assets/matisse.jpg";
import monet from "../Assets/monet.jpg";
import orig from "../Assets/orig.jpg";

const axios = require("axios");

export default class Stylizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "",
      imageDisplay: null,
      imageRaw: null,
      isLoading: true,
      isUploaded: false,
      isSubmitted: false,
      ngrok_address: ""
    };
  }

  onChangeValue = (event) => {
    this.setState({ chosenstyle: event.target.value });
    // this.chosenstyle is either "Van Gogh", "Matisse", or "Monet"
  };

  onClick = () => {
    const formData = new FormData();
    this.setState({
      isSubmitted: true,
      isUploaded: false,
    });
    formData.append("image", this.state.imageRaw);
    formData.append("style", this.state.chosenstyle);

    axios
      .post(this.state.ngrok_address + "/stylize", formData)
      .then((resp) => console.log(resp))
      .then((resp) => this.setState({ isLoading: false }));
  };

  handleChange = (event) => {
    this.setState({
      imageDisplay: URL.createObjectURL(event.target.files[0]),
      imageRaw: event.target.files[0],
      isUploaded: true,
    });
  };

  handleNgrokLink = (event) => {
    this.setState({
      ngrok_address: event.target.value 
      
      // imageDisplay: URL.createObjectURL(event.target.files[0]),
      // imageRaw: event.target.files[0],
      // isUploaded: true,
    });
    window.alert(this.state.ngrok_address);
  };

  uploadScreen = () => {
    return (
      <div>
        <h1>Your image style transfer result is: </h1>
        {this.state.isLoading ? (
          <div className="loading">
            <p>Our model is hard at work...</p>
            <img src={loading} alt="loading..." style={{ width: 300 }} />
          </div>
        ) : (
          <img
            src={this.state.ngrok_address + "/result"}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
        )}
      </div>
    );
  };

  // TODO: make three target image options, and link to backend
  // sample push
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label>
            <h1>Connect to our backend: </h1>
            <p>Navigate to <a href= "https://colab.research.google.com/drive/19yEuw8gtzWdb_zDL-R14dnK81oGQMifQ?usp=sharing"> Colab</a>.</p>
            <p>Paste the url after "Running on" that ends in ngrok.io below.</p>
            Ngrok link: 
            <input
              type="text"
              name="link"
              value = {this.state.value}
              ref={node => (this.inputNode = node)}
              onChange = {this.handleNgrokLink}
            />
          </label>
          <button onClick={this.handleNgrokLink} type="submit">Submit</button>

          <h1>Choose an artist style:</h1>
          <div onChange={this.onChangeValue}>
            <img src={vanGogh} width="200" height="150" alt="Image"></img>
            <input type="radio" value="van_gogh" name="van_gogh" />
            <br />

            <img src={matisse} width="200" height="150" alt="Image"></img>
            <input type="radio" value="matisse" name="matisse" />
            <br />

            <img src={monet} width="200" height="150" alt="Image"></img>
            <input type="radio" value="monet" name="monet" />
          </div>
          <h1>
            Upload an image that you want to be changed into your chosen style:
          </h1>
          <div id="inputs">
            <input
              type="file"
              encType="multipart/form-data"
              accept="image/jpeg, image/png"
              name="image"
              id="file"
              onChange={this.handleChange}
            />
            <img
              src={this.state.image}
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />
            <button onClick={this.onClick} disabled={!this.state.isUploaded}>
              Style your image!
            </button>
          </div>
          {this.state.isSubmitted ? this.uploadScreen() : null}
        </form>
      </div>
    );
  }
}
