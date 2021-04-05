import React, {Component} from 'react';
import './ExampleButton.css';

import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';

export default class CTAButton extends Component {
    render() {
        const arrowRightStyle = {
            verticalAlign: "middle",
            paddingLeft: 4,
        }
        const defaultText = "Find your car"
        const defaultLink = "/find-your-car"
        return(
            <div className="CTA" style={this.props.style}>
                <Link to={this.props.link ? this.props.link : defaultLink} className="CTAButton" style={this.props.buttonStyle}>
                    {this.props.text ? this.props.text : defaultText}{this.props.children}
                    {this.props.arrow ? <IosArrowRoundForward color="white" style={arrowRightStyle}/> : null}
                    {this.props.arrowBlack ? <IosArrowRoundForward color="black" style={arrowRightStyle}/> : null}
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
    arrow: Proptypes.bool,
}