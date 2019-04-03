import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import Spinner from './Spinner';
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

    renderContent = () => {
        if (this.state.images === []) {
            return (
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <Spinner />
                </div>
            );
        }
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };

    render() {
        return this.renderContent();
    };
};

export default App;