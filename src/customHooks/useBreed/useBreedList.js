import {useState, useEffect} from 'react' 

const localCache = {}

const useBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]) 
    const [status, setStatus] = useState('unloaded') 

    // [animal, setAnimal] = useState('')
    // [breed, setBreed] = useState('')
    // [localCache, setLocalCache] = useState([])

    useEffect(()=>{
        if(!animal) {
            setBreedList([])
        }
        else if(localCache[animal]) {
            setBreedList[localCache[animal]]
        }
        else {
            requestBreedList(setStatus)
        }

        async function requestBreedList(setStatus) {
            setStatus('loading')
            const res = await fetch(`http://pets-v2.dev-apis2q.com/breeds?animal=${animal}`)
            const json = await res.json()

            localCache[animal] = json.breeds || []
            setStatus(() => {
                // console.log(2222, prev)
                return 'loaded'
            })
            setBreedList(localCache[animal])
        }

    },[animal, setBreedList])  //eslint-disable-line
    
    
    return [breedList, status]
}

export default useBreedList 