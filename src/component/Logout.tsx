import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/esm/Spinner"

export default function Logout() {

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=> {
        setUser({
            user_id:0,
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            token: ''
        })
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    })

  return (
    <Spinner animation="border" variant="light" />
  )
}
