
import { Fragment } from "react"
import useBreedList  from "../../customHooks/useBreed/useBreedList"

const AnimalSelector = (props) => {
    const animal = props.animal
    const setAnimal = props.setAnimal
    const ANIMALS = props.ANIMALS
    console.log('props', props)
    const [breeds] = useBreedList(animal)

    console.log('main breed', breeds)

    // const [animal, setAnimal] = useState()
    return (
        <Fragment>
            <label htmlFor='animals'>Animal - {animal}</label>
            <select id="animal"
                onChange={(e) => {
                    setAnimal(e.target.value)
                }
                }
                onBlur={(e) => {
                    setAnimal(e.target.value)

                }}>
                <option />
                {ANIMALS.map((el, i) => {
                    return (
                        <option key={i} value={el}>
                            {el}
                        </option>
                    )
                })}
            </select>

            <label htmlFor="breeds">Breeds</label>
            <select id="breeds">
                <option value=""/>
                {
                    breeds.map((el, i)=>{
                        return (<option key={i} value={el}>
                            {el}
                        </option>)
                    })
                }
            </select>

        </Fragment>
    )
}

export default AnimalSelector