import React, {Component} from 'react';

export default class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            question1: "",
            question2: "",
            question3: "",
            question4: "",
        }
    }

    onChangeValue = (event) => {
        this.setState({question1: event.target.value})
    }

    onChangeValue2 = event => {
        this.setState({question2: event.target.value})
    }

    onChangeValue3 = event => {
        this.setState({question3: event.target.value})
    }

    onChangeValue4 = event => {
        this.setState({question4: event.target.value})
    }

    render() {
        return(
            <div>
                <strong> What is your favorite shape?</strong>
                <div onChange={this.onChangeValue}>
                    <input type="radio" value="Van Gogh" name="q1" /> Van Gogh
                    <input type="radio" value="Matisse" name="q1" /> Matisse
                    <input type="radio" value="Monet" name="q1" /> Monet
                </div>

                <strong> What is your most recently used emoji?</strong>
                <div onChange={this.onChangeValue2}>
                    <input type="radio" value="Van Gogh" name="q2" /> Van Gogh
                    <input type="radio" value="Matisse" name="q2" /> Matisse
                    <input type="radio" value="Monet" name="q2" /> Monet
                </div>

                <strong> What is your most recently used emoji?</strong>
                <div onChange={this.onChangeValue3}>
                    <input type="radio" value="Van Gogh" name="q3" /> Van Gogh
                    <input type="radio" value="Matisse" name="q3" /> Matisse
                    <input type="radio" value="Monet" name="q3" /> Monet
                </div>

                <strong>What is your dream vacation spot?</strong>
                <div onChange={this.onChangeValue4}>
                    <input type="radio" value="Van Gogh" name="q4" /> Van Gogh
                    <input type="radio" value="Matisse" name="q4" /> Matisse
                    <input type="radio" value="Monet" name="q4" /> Monet
                </div>

                <div>
                    <h3>Your selected artist is : {this.state.question1} </h3>
                    <h3>Your selected artist is : {this.state.question2} </h3>
                    <h3>Your selected artist is : {this.state.question3} </h3>
                    <h3>Your selected artist is : {this.state.question4} </h3>
                </div>
            </div>
        )
    }
}