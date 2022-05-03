import { Component } from "react";


class Carousel extends Component {
    state = {
        active: 0
    }

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }

    constructor() {
        super()

    }

    handlerClick = (event)=>{
        this.setState({
            active : event.target.dataset.index
        },()=>{

        })
    }
    render() {
        const {active} = this.state
        const {images} = this.props

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {
                        images.map((photo, index) => {
                            //eslint-disable-next-line
                            return (<img
                                key={photo}
                                data-index={index}
                                onClick={this.handlerClick}
                                src={photo}
                                alt={index}
                                className={index == active ? "active" : ""}
                            />)
                        })
                    }
                </div>
            </div>
        )
    }
}

Carousel.defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
}
export default Carousel