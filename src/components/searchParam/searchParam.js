import { useState, useEffect } from "react"
import { useContext } from "react"
import AnimalSelector from "../animalSelector/animalSelector"
import Results from '../results/Results'
import ThemeContext from "../themeContext/ThemeContext"



const SearchParam =() => {
    const [animal, setAnimal] = useState('')
    const ANIMALS = ['bird', 'cat', 'dog', 'alligator', 'bear']
    const [pets, setPets] = useState()
    const [Location, setLocation] = useState("Seattle")
    const [color, setColor] = useContext(ThemeContext)

    
    useEffect(()=>{
        
        fetchData()
        // fetchinlgData()
        
        // console.log(a)

    }, [animal, Location]) //eslint-disable-line
    
    async function fetchData() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&city=${Location}`)
        const json = await res.json()

        console.log(`pets`, json.pets)
        setPets(json.pets)


    }

    return (
        <div className="search-params">
            <form onSubmit={
                (e)=>{
                 e.preventDefault() 
                 fetchData()
                   
                }}>
                <label htmlFor="location">
                    Location
                <input id="location" value={Location} placeholder="write the city" onChange={(event)=>{
                    setLocation(event.target.value)
                }}
                    onBlur={(event) => {
                        setLocation(event.target.value)
                    }}/>
                </label>
                <AnimalSelector animal={animal} setAnimal={setAnimal} ANIMALS={ANIMALS}/>
                <label htmlFor="theme">
                    <select value={color}
                    onChange={(e)=>{setColor(e.target.value)}}
                    onBlur={(e)=>{setColor(e.target.value)}}
                    >
                        <option value={"darkblue"}>darkblue</option>
                        <option value={"red"}>red</option>
                        <option value={"yellow"}>yellow</option>
                        <option value={"pink"}>pink</option>
                    </select>
                </label>
                <button type="submit" style={{'backgroundColor': color}}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )

    
}

export default SearchParam