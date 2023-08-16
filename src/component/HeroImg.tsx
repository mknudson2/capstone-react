import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserProvider";



export default function HeroImg() {
    const Navigate = useNavigate();

    const handleButtonClicked = ()=>{
        Navigate("/login-register")
    }
    
    const handleLogoutClicked = ()=>{
        Navigate("/logout")
    }
    const { user } = useContext(UserContext)

  return (
    <div className="hero-container">
      <div className="hero-blur"></div>
      <img
        className="hero-img"
        src="/the_settlement_exhbition_025_-rroman_gerasynenko.jpeg"
        alt="Landnámabók manuscript"
      />
      <div className="hero-content">
        <h1>The Complete Resource and Community for</h1>
        <h1>Old Norse Learning and Research</h1>
        { user.email ? (
          <button className="hero-logout-button" onClick={handleLogoutClicked}>Logout</button>
          ) : <button className="hero-button" onClick={handleButtonClicked}> Login / Sign Up</button>
          }
      </div>
    </div>
  );
}
