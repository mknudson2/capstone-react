import { useNavigate } from "react-router-dom"



export default function HeroImg() {
    const Navigate = useNavigate();

    const handleButtonClicked = ()=>{
        Navigate("/login-register")
    }
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
        <button className="hero-button" onClick={handleButtonClicked}> Login / Sign Up</button>
      </div>
    </div>
  );
}
