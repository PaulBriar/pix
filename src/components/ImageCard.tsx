import React from 'react';

class ImageCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        (this.props as any).imageRef = React.createRef();
    }

    componentDidMount() {
        this.props.imageRef.current.addEventListener('load', (this as any).setSpans);
    }

    setSpans() {
        console.log(this.props.imageRef.current.clientHeight);
        
    }

    render() {
        const { description, urls } = this.props.img;

        return(
            <div>
                <img
                    ref={this.props.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;