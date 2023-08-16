import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import UserPage from "./pages/UserPage";

import Navbar from "./component/OffCanvasNav";
import Landing from "./component/Landing";
import Logout from "./component/Logout";
import LaxdoelaSagaPage from "./pages/LaxdoelaSagaPage";

function App() {
  return (
    // react fragment <> </> since all items need to be wrapped in/belong to a parent class. This stops the clutter.
    <Container fluid className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/user-page" element={<UserPage/>} />
          <Route path="/laxdoela-ch1" element={<LaxdoelaSagaPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
