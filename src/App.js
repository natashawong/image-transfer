import React, {Component} from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: null
    }
  }

  handleChange = (event) => {
    this.setState({
      image: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
      return (
        <div>
          <h1>Upload an image that you want to be changed into your chosen style:</h1>
          <input type="file"  accept="image/jpeg, image/png" name="image" id="file" onChange={this.handleChange}/>
          <img src={this.state.image}/>
          <h1>Your image style transfer result is: </h1>
          <img src={"http://0ef631042aaa.ngrok.io/result" || null}/>
        </div>
      )
  }
}