import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import '../styles/main.css';

class App extends React.Component<any, any> {
    state = {
        images: [],
    };

    onSearchSubmit = async (term:string) => {
        const res = await unsplash.get('/search/photos', {
            params: { query: term, per_page: 30 },
            
        });
        this.setState({ images: res.data.results });       
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
};

export default App;