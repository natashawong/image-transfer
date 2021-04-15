import React, {Component} from 'react';
import {Link } from "react-router-dom";
import loading from '../loading.gif';
import Button from "../ExampleButton.js";

import { connect } from 'react-redux';

const axios = require('axios')

export class Upload extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageDisplay: null,
      imageRaw: null,
      isLoading: true,
      isUploaded: false,
      isSubmitted: false,
      ngrok_address: ""
    }
  }

  testChange = () => {
    window.alert("Style is: " + this.props.selectedStyle.data)
  }
  
  handleChange = (event) => {
    this.setState({
      imageDisplay: URL.createObjectURL(event.target.files[0]),
      imageRaw: event.target.files[0],
      isUploaded: true
    })
  }

  handleNgrokChange = (event) => {
    this.setState({
      ngrok_address: event.target.value 
    });
  };

  handleSubmit(event) {
    alert('Your response was submitted: ' + this.state.value);
    event.preventDefault();
  }

  onClick = () => {
    const formData = new FormData();
    this.setState({
      isSubmitted: true,
      isUploaded: false
    })
    formData.append("image", this.state.imageRaw)
    formData.append("style", this.props.selectedStyle.data)


    axios.post(this.state.ngrok_address+"/stylize", formData)
    .then(resp => console.log(resp))
    .then(resp => this.setState({isLoading: false}))
  }

  // TODO: add error if waiting for more than 30 sec
  uploadScreen = () => {
    return(
      <div>
        <h1>Your image style transfer result is: </h1>
        {this.state.isLoading ?
          <div className="loading">
            <p>Our model is hard at work...</p>
            <img src={loading} alt="loading..." style={{width: 300}}/>
          </div>
          :
          <img src= {this.state.ngrok_address + "/result"} style={{maxWidth: "500px", maxHeight: "500px"}} />
        }
      </div>
    )
  }
  
  render() {
      return (
        <div>
          <h1>Connect to our backend: </h1>
            <p>Navigate to <a href= "https://colab.research.google.com/drive/19yEuw8gtzWdb_zDL-R14dnK81oGQMifQ?usp=sharing" target="_blank"> Colab</a>.</p>
            <p>Paste the url after "Running on" that ends in ngrok.io below.</p>
            Ngrok link: 
            <label>
            <input type="text" value={this.state.value} onChange={this.handleNgrokChange} name="link"/>
            </label>
          <button onClick={this.testChange} type="submit">Submit</button>
          <h1>Upload an image that you want to be changed into your chosen style:</h1>
          <div id="inputs">
            <input type="file" encType="multipart/form-data" accept="image/jpeg, image/png" name="image" id="file" onChange={this.handleChange}/>
            <img src={this.state.image} style={{maxWidth: "500px", maxHeight: "500px"}}/>
            <button onClick={this.onClick} disabled={!this.state.isUploaded}>Style your image!</button>
          </div>
          {this.state.isSubmitted ? this.uploadScreen() : null}
          <Link to="/">
                <Button className="btn btn-default">
                    Back to Home
                </Button>
                </Link>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  selectedStyle: state.selectedStyle,
});

export default connect(mapStateToProps)(Upload)