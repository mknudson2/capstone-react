import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Header from "../src/component/Header";
import MatrixClassroomPage from "./pages/MatrixClassroomPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./component/OffCanvasNav";
import GrammarCard from "./component/GrammarCard";
import ResourcesCard from "./component/ResourcesCard";
import TextsCard from "./component/TextsCard";
import { Stack } from "react-bootstrap";
import HeroImg from "./component/HeroImg";

function App() {
  return (
    // react fragment <> </> since all items need to be wrapped in/belong to a parent class. This stops the clutter.
    <Container fluid className="container">
      <BrowserRouter>
        <Navbar />
        <HeroImg />
        <div className="card-container">
          <GrammarCard />
          <TextsCard />
          <ResourcesCard />
        </div>
        <hr className="horizontal-row"/>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MatrixClassroomPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
