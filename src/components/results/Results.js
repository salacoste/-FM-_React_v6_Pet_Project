import Pet from '../pet/pet'

function Results({pets}) {
    return <div className='search'>
        {pets && pets.length ? pets.map(pet => {
            return <Pet 
            name={pet.name}
            animal={pet.animal} 
            breed={pet.breed}  
            images={pet.images}
            key={pet.id} 
            id={pet.id}
            location={`${pet.city}, ${pet.state}`}
            />
        }) : (<div> There is no any animal in the list </div>)}

    </div>
}

export default Results