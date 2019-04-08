import React from 'react';
import ImageList from './ImageList';
import '../styles/main.css';

class SearchView extends React.Component<any, any> {
    render() {
        return <ImageList images={this.props.images} />;
    };
};

export default SearchView;