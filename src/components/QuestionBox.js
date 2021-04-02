import React, {useState} from "react";
import PropTypes from 'prop-types';
  

const QuestionBox = ({ question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
        <strong> What is your favorite shape?</strong>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Van Gogh"
                checked={this.state.selectedOption === "Van Gogh"}
                onChange={this.onValueChange}
              />
              Stars are out of this world!
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Matisse"
                checked={this.state.selectedOption === "Matisse"}
                onChange={this.onValueChange}
              />
              I'm very square.
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Monet"
                checked={this.state.selectedOption === "Monet"}
                onChange={this.onValueChange}
              />
              The shape of ~petals~
            </label>
          </div>
    </div>
    
  )
};


export default QuestionBox;