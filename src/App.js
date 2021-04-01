import React, {Component} from 'react';
import QuestionBlock from './QuestionBlock';
import loading from './loading.gif';

const axios = require('axios')

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageDisplay: null,
      imageRaw: null,
      isLoading: true,
      isUploaded: false,
      isSubmitted: false,
    }
  }
  
  handleChange = (event) => {
    this.setState({
      imageDisplay: URL.createObjectURL(event.target.files[0]),
      imageRaw: event.target.files[0],
      isUploaded: true
    })
  }

  onClick = () => {
    const formData = new FormData();
    this.setState({
      isSubmitted: true,
      isUploaded: false
    })
    formData.append("image", this.state.imageRaw)

    axios.post('http://4fcd2f97c044.ngrok.io/stylize', formData)
    .then(resp => console.log(resp))
    .then(resp => this.setState({isLoading: false}))
  }

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
          <img src="http://4fcd2f97c044.ngrok.io/result" style={{maxWidth: "500px", maxHeight: "500px"}} />
        }
      </div>
    )
  }
  
  render() {
      return (
        <div>
          <h1>Upload an image that you want to be changed into your chosen style:</h1>
          <div id="inputs">
            <input type="file" encType="multipart/form-data" accept="image/jpeg, image/png" name="image" id="file" onChange={this.handleChange}/>
            <img src={this.state.image} style={{maxWidth: "500px", maxHeight: "500px"}}/>
            <button onClick={this.onClick} disabled={!this.state.isUploaded}>Style your image!</button>
          </div>

          {this.state.isSubmitted ? this.uploadScreen() : null}

          {/* <QuestionBlock
            questionNumber={1}
            numbering={"1."}
            prompt={"Test question 1!"}
            // error in mapping here below, pls edit, use javascript array
            options={[{A: "A", B:"B", C:"C", D:"D"}]}
          /> */}
        </div>
      )
  }
}