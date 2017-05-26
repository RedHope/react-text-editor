import React, { Component } from 'react';
import _ from 'lodash';

class Dropdown extends Component {
    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        const suggestions = this.props.suggestions.map((suggestion) => 
            <li 
                key={suggestion} 
                className='dropdown-item'
                onClick={this.handleClick}>{suggestion}</li>
        );

        return (
            <div className='dropdown'>
                <ul className='dropdown-list'>
                    {suggestions}
                </ul>
            </div>
        );
    }
}

export default Dropdown;