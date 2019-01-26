import React from 'react';

class ImageList extends React.Component {
    render() {
        const images = this.props.images.map( img => {
            return <img src={img.urls.regular} alt={img.title}/>;
        });
        
        return <div>{ images }</div>;
    }
};

export default ImageList;