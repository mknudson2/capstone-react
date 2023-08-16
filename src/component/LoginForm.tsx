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
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setUser({
        user_id: data.user_id,
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
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
