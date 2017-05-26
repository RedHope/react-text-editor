import React, { Component } from 'react';
import Dropdown from './Dropdown.jsx';

class App extends Component {
    render() {
        let suggestions = [
            'Anurag', 'Sharma', 'is', 'a', 'good', 'bot'
        ];
        return (
            <div contentEditable className="text-editor">
                <Dropdown suggestions={suggestions} />
            </div>)
    }
}

export default App;