import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useRequestData = () => {
    const navigate = useNavigate()
    const token = window.localStorage.getItem('token')

    useEffect(() => {
        switch (token) {
            case null:
                navigate('/login')
            default:
                console.log("ok token!")
        }
    }, [])
}

export default useRequestData;