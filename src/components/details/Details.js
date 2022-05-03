import {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from '../carousel/Carousel'
import Modal from '../modal/Modal'
import ThemeContext from '../themeContext/ThemeContext'



class Details extends Component {
    state = { loading: true, showModal: false }

    constructor() {
        super()
        
    }

    modalHandler = ()=>{
        this.setState({
            showModal: !this.state.showModal
        })
    }
    adopt = ()=>{
        window.location = 'http://bit.ly/pet-adopt'
    }

    async componentDidMount() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
        const json = await res.json()
        this.setState({
            loading: false,
            ...json.pets[0]
        })
    }

    render() {
        const {animal, breed, name, city, state, description, images, showModal} = this.state
        return (
            <div className='details'>
                <Carousel images={images} />
                <h1>
                    {name}
                </h1>
                <h2>
                    {`${animal} - ${breed} - ${city} ${state}`}
                </h2>
                <p style={{marginBottom: '10px'}}>
                    {description}
                </p>
                <ThemeContext.Consumer>
                    {
                        ([theme])=>{
                            return (
                                <button 
                                onClick={this.modalHandler}
                                style={{'backgroundColor':[theme]}}>{`Adopt ${name}`}</button>
                            )
                        }
                    }
                </ThemeContext.Consumer>
                {
                    showModal && (
                        <Modal>
                            <h1>
                               Would you like to adopt {name}? 
                            </h1>
                            <div className='buttons'>
                                <button onClick={this.adopt}>
                                    Yes
                                </button>
                                <button onClick={this.modalHandler}>
                                    No
                                </button>
                            </div>
                        </Modal>
                    )
                }
            </div>
        )
    }
}

export default withRouter(Details)