import { FormEvent, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function LoginForm() {
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.email) navigate("/");
  }, [user]);

  async function handleUserData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailField.current!.value,
        password: passwordField.current!.value,
      }),
    });
    // ===========================
    if (res.ok) {
      const data = await res.json();

      const token = data.access_token;
      localStorage.setItem("token", JSON.stringify(token));
      const res = await fetch ("http://127.0.0.1:5000/api/")

      setUser({
        user_id: data.user.user_id,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        username: data.user.username,
        email: emailField.current!.value,
        token: data.access_token,
      });

      updateUserState(
        data.user_id,
        data.first_name,
        data.last_name,
        data.username,
        emailField.current!.value,
        data.access_token
      );
      resetForm();
    } else window.alert("Invalid UserData");
  }

  function updateUserState(
    user_id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    token: string
  ) {
    console.log(user.first_name, "LOGIN FORM--USER FIRST NAME");
    setUser({
      user_id: user_id,
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      token: token,
    });
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("first_name", JSON.stringify(first_name));
    localStorage.setItem("last_name", JSON.stringify(last_name));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("user_id", JSON.stringify(user_id));
  }

  function resetForm() {
    emailField.current!.value = "";
    passwordField.current!.value = "";
  }

  return (
    <div className="signin-container">
      <h5>Already have an account?</h5>
      <h2 className="signin-header">Sign In: </h2>
      <form onSubmit={handleUserData} className="login-form">
        <input
          type="text"
          ref={emailField}
          required
          placeholder="Email"
          className="sign-in-fields"
        />
        <br />
        <input
          type="password"
          ref={passwordField}
          required
          placeholder="Password"
          className="sign-in-fields"
        />{" "}
        <br />
        <button type="submit" className="signin-btn">
          Sign In
        </button>
      </form>
      <p className="signin-description-header">Sign in to:</p>
      <ul>
        <li className="signin-description-li">
          Access the full library of interactive texts
        </li>
        <li className="signin-description-li">
          Access the full Old Norse course
        </li>
        <li className="signin-description-li">
          Find and connect with other Norse scholars and enthusiasts
        </li>
        <li className="signin-description-li">
          Have up-to-date access to journals, conferences, programs, and job
          annoucements
        </li>
        <li className="signin-description-li">
          Contribute to making the largest, most comprehensive resource and
          community for Viking and Medieval Nordic studies
        </li>
      </ul>
    </div>
  );
}
