import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/esm/Spinner"

export default function Logout() {

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=> {
        setUser({
            email: '',
            token: ''
        })
        navigate('/')
    })

  return (
    <Spinner animation="border" variant="light" />
  )
}
