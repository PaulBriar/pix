import React from 'react';

class ImageList extends React.Component<any, any> {
    render() {
        const images = this.props.images.map( ({id, urls, description}: any) => {
            return <img key={id} src={urls.regular} alt={description}/>;
        });
        
        return <div>{ images }</div>;
    }
};

export default ImageList;