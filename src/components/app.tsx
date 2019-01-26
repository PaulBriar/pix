import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import '../styles/main.css';

class App extends React.Component<any, any> {
    state = {
        images: [],
    };

    onSearchSubmit = async (term:string) => {
        const res = await unsplash.get('/search/photos', {
            params: { query: term },
            
        });
        this.setState({ images: res.data.results });       
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    };
};

export default App;