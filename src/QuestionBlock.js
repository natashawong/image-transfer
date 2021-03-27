import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import "./QuestionBlock.css"

export default class QuestionBlock extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.numbering}. {this.props.prompt}</h4>
        {this.props.options.map((option, i) => {
          return(
          <div key={i}>
            <label>Test</label>
            <Field type="radio" name={this.props.questionNumber} value={option.letter}/>
          </div>
        )})}
      </div>
    )
  }
}

QuestionBlock.propTypes = {
  questionNumber: PropTypes.number,
  numbering: PropTypes.number,
  prompt: PropTypes.string,
  options: PropTypes.array,
}
