import React from 'react';

class ImageCard extends React.Component<any> {
    constructor(props: any) {
        super(props);

        this.state = { spans: 0 };

        (this as any).imageRef = React.createRef();
    };

    componentDidMount() {
        (this as any).imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
        const imgHeight = (this as any).imageRef.current.clientHeight;
        const spans = Math.ceil(imgHeight / 10 );
        this.setState({ spans })
    };

    render() {
        const { description, urls, links } = this.props.img;

        return(
            <div style={{ gridRowEnd: `span ${(this as any).state.spans}`}}>
                <a href={links.html} target="_blank">
                <img
                    ref={(this as any).imageRef}
                    alt={description}
                    src={urls.regular}
                />
                </a>
            </div>
        );
    }
};

export default ImageCard;