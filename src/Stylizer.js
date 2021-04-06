import React, {Component} from 'react';
import {Link } from "react-router-dom";
// import loading from './loading.gif';

// const axios = require('axios')

export default class Stylizer extends Component {
  constructor(props){
    super(props)
    this.state = {
      style: '',
      imageDisplay: null,
      imageRaw: null,
      isLoading: true,
      isUploaded: false,
      isSubmitted: false,
    }
  }


  onChangeValue = (event) => {
    this.setState({chosenstyle: event.target.value}) 
    // this.chosenstyle is either "Van Gogh", "Matisse", or "Monet"
  }

  onClick = () => {
    const formData = new FormData();
    this.setState({
      isSubmitted: true,
      isUploaded: false
    })
    formData.append("image", this.state.imageRaw)
    formData.append("style", this.state.chosenstyle)
  
    // TODO: tried to link to stylize app route
    fetch('/stylize', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      .then(resp => console.log(resp))
      .then(resp => this.setState({isLoading: false}))
    });
  }

// TODO: make three target image options, and link to backend
// sample push
  render() {
      return (
        <div>
        <h1>Choose an artist style:</h1>
        <form onSubmit={this.formSubmit}>
          <div onChange={this.onChangeValue}>
              <img src="../static/image/van_gogh.jpg" width="200" height="150" alt="Image"></img>
              <input type="radio" value="Van Gogh" name="Van Gogh"  /> 
              <br />

              <img src="../static/image/matisse.jpg" width="200" height="150" alt="Image"></img>
              <input type="radio" value="Matisse" name="Matisse" /> 
              <br />

              <img src="../static/image/monet.jpg" width="200" height="150" alt="Image"></img>
              <input type="radio" value="Monet" name="Monet" /> 
          </div>
          <h1>Upload an image that you want to be changed into your chosen style:</h1>
          <div id="inputs">
            <input type="file" encType="multipart/form-data" accept="image/jpeg, image/png" name="image" id="file" onChange={this.handleChange}/>
            <img src={this.state.image} style={{maxWidth: "500px", maxHeight: "500px"}}/>
            <button onClick={this.onClick} disabled={!this.state.isUploaded}>Style your image!</button>
          </div>
          {this.state.isSubmitted ? this.uploadScreen() : null}
            </form>
        </div>
      )
  }
}