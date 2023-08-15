// import Body from "../component/Body";
import { useRef } from 'react'

export default function LoginRegisterPage() {

    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)

  return (
    <>
      <h2>Login Form</h2>
      <form action="" className="login-form">

        <input type="text" ref={usernameField} placeholder='Email' />
        <br />
        <input type="password" ref={passwordField} placeholder='Password' />
      </form>
    </>
  );
}
