import React, {Component} from 'react';
import { checkPropTypes } from 'prop-types';

export default class ButtonCustomizado extends Component {
    render(){
        return (
            <div className="pure-control-group">
                <label></label>
                <button type={this.props.type} className="pure-button pure-button-primary">{this.props.caption}</button>
            </div>
        );
    }
}