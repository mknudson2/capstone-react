import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider"

export default function LoginForm() {
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext)


  useEffect(() => {
    if (user.email) navigate("/");
  }, [user]);

  async function handleUserData() {
    const res = await fetch("", {});
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setUser({
        email: emailField.current!.value.toString(),
        token: data.access_token,
      });
      resetForm();
    } else window.alert("Invaldi UserData");
  }

  function resetForm() {
    emailField.current!.value = "";
    passwordField.current!.value = "";
  }

  return (
    <div className="signin-container">
      <h5>Already have an account?</h5>
      <h2>Sign In: </h2>
      <form onSubmit={handleUserData} className="login-form">
        <input type="text" ref={emailField} required placeholder="Email" />
        <br />
        <input
          type="password"
          ref={passwordField}
          required
          placeholder="Password"
        />{" "}
        <br />
        <button type="submit" className="signin-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}
