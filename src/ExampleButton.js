import React, {Component} from 'react';
import './ExampleButton.css';

import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CTAButton extends Component {
    render() {
        const arrowRightStyle = {
            verticalAlign: "middle",
            paddingLeft: 4,
        }
        const defaultText = " "
        const defaultLink = "/"
        return(
            <div className="CTA" style={this.props.style}>
                <Link to={this.props.link ? this.props.link : defaultLink} className="CTAButton" style={this.props.buttonStyle}>
                    {this.props.text ? this.props.text : defaultText}{this.props.children}
                    
                </Link>
            </div>
        )
    }
}

CTAButton.propTypes = {
    link: Proptypes.string,
    style: Proptypes.any,
    buttonStyle: Proptypes.any,
    text: Proptypes.string,
    // arrow: Proptypes.bool,
}