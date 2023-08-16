import { useRef, FormEvent, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function RegisterForm() {
  const firstNameField = useRef<HTMLInputElement>(null);
  const lastNameField = useRef<HTMLInputElement>(null);
  const usernameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const verifyPasswordField = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (user.email) navigate("/");
  }, [user, navigate]);

  async function handleRegisterData(e:FormEvent<HTMLFormElement>){
    e.preventDefault
    const res = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstNameField.current!.value,
        last_name: lastNameField.current!.value,
        username: usernameField.current!.value,
        email: emailField.current!.value,
        password: passwordField.current!.value,
        verify_password: verifyPasswordField.current!.value
      })
    })
    if (res.ok){
      const data = await res.json()
      setUser({
        email: emailField.current!.value,
        token: ''
      })
      resetForm()
    } else window.alert("Register Failed")
  }

  function resetForm(){
    firstNameField.current!.value = '',
    lastNameField.current!.value = '',
    usernameField.current!.value = '',
    emailField.current!.value = '',
    passwordField.current!.value = '',
    verifyPasswordField.current!.value = ''
  }

  return (
    <div className="register-container">
      <h5>Don't have an account?</h5>
      <h1>Register: </h1>
      <form onSubmit={handleRegisterData} className="register-form">
        <input type="text" placeholder="First Name" ref={firstNameField}/>
        <br />
        <input type="text" placeholder="Last Name" ref={lastNameField}/>
        <br />
        <input type="text" placeholder="Username" ref={usernameField}/>
        <br />
        <input type="text" placeholder="Email" ref={emailField}/>
        <br />
        <input type="password" placeholder="Password" ref={passwordField}/>
        <br />
        <input type="password" placeholder="Verify Password" ref={verifyPasswordField}/>
        <br />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}