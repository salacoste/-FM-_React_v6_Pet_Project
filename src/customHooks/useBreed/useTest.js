import { useState } from "react";
import { useEffect } from "react";

export default async function useTest() {

    const [status,setStatus] = useState('unloaded')

    useEffect(()=>{
        console.log('st now', status)
        setStatus('loaded')
        console.log('st s', status)
        // const a = setTimeout(()=>{
        //     setStatus('loaded')
        //     console.log('st fut', status)
        // },3000)
        // return (
        //     clearTimeout(a)
        // )
    }, [status, setStatus])

    return status
}