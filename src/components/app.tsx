import React from 'react';
import SearchBar from './SearchBar';
import '../styles/main.css';

class App extends React.Component<any, any> {
    onSearchSubmit(term:string) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    };
}

export default App;