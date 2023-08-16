import { useParams } from "react-router-dom"

export default function UserPage({ user }:{user:LoggedUser}) {

  const {username} = useParams()
  return (
    <h1>{username}'s Page</h1> 
  )
}
