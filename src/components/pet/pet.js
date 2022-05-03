import { Link } from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min"

const Pet = ({name, breed, animal, location, id, images}) =>{
    let hero = `http://pets-images.dev-apis.com/pets/none.jpeg`

    if(images.length) hero = images[0]
    return (
        <Fragment>
            <Link to={`/details/${id}`} className="pet">
                <div className="image-container">
                    <img src={hero} alt=""/>
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>
                        {`${animal} - ${breed} - ${location}`}
                    </h2>
                </div>
            </Link>
        {/* <div>
            ID: {id}
        </div>
        <div>
            <img src={hero} alt="hero" width={'80px'} />
        </div>
        <div>
            Name: {name}
            
        </div>
        <div>
            Location: {location }
        </div>
        <div>
            Animal: {animal}
        </div>
        <div>
            Breed: {breed }
        </div> */}

        </Fragment>
    )
}
export default Pet