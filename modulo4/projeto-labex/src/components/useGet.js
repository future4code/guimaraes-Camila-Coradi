import axios from "axios"
import { Url, aluna } from "../App"
import { useState, useEffect } from "react"

const useGet = () => {
    const [trips, setTrips] = useState([])

    useEffect(()=>{
        axios
            .get(`${Url}${aluna}trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])


    return trips
}
export default useGet;