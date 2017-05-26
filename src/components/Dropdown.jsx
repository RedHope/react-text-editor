import React, { Component } from 'react';
import _ from 'lodash';

class Dropdown extends Component { 
    render() {
        const suggestions = this.props.suggestions.map((suggestion) => 
            <li key={suggestion} className='dropdown-item'>{suggestion}</li>
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