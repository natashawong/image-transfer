import React, {Component} from 'react';

const axios = require('axios')

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      loading: 0
    }
  }

  handleChange = (event) => {
    const formData = new FormData();
    this.setState({
      image: URL.createObjectURL(event.target.files[0])
    })
    formData.append("image", event.target.files[0])

    axios.post('http://c3363ecd6fb9.ngrok.io/stylize', formData)
    .then(resp => console.log(resp))
    .then(resp => this.setState({loading: 1}))
  }
  
  render() {
      return (
        <div>
          <h1>Upload an image that you want to be changed into your chosen style:</h1>
          <input type="file"  encType="multipart/form-data" accept="image/jpeg, image/png" name="image" id="file" onChange={this.handleChange}/>
          <img src={this.state.image}/>
          <h1>Your image style transfer result is: </h1>
          <img src={this.state.loading == 1 ? "http://c3363ecd6fb9.ngrok.io/result" : null}/>
        </div>
      )
  }
}