import React from 'react';
import SearchBar from './SearchBar';
import '../styles/main.css';

const App: React.StatelessComponent<any> = () => {
    return (
        <div className="ui container">
            <SearchBar/>
        </div>
    )
};

export default App;