
export default function HeroImg() {
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
        <button className="hero-button">Login / Sign Up</button>
      </div>
    </div>
  );
}
