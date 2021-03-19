import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
          <div>
            <h1>Your image style transfer result is: </h1>
            <img src={"http://0ef631042aaa.ngrok.io/result" || null}/>
          </div>
        )
    }
}