import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageList.css';

class ImageList extends React.Component<any, any> {
    render() {
        const images = this.props.images.map( (img: any) => {
            return <ImageCard key={img.id} img={img} />;
        });
        
        return <div className="image-list">{ images }</div>;
    }
};

export default ImageList;