import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserProvider";
import Container from "react-bootstrap/Container";

import UserPage from "./pages/UserPage";
import Navbar from "./component/OffCanvasNav";
import Landing from "./component/Landing";
import Logout from "./component/Logout";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import LaxdoelaSagaPage from "./pages/LaxdoelaSagaPage";
import ResourcesPage from "./pages/ResourcesPage";
import TextsPage from "./pages/TextsPage";
import GrammarPage from "./pages/GrammarPage";

function App() {

  const { user, setUser } = useContext(UserContext)

  useEffect(()=>{
    console.log(localStorage.getItem('username'))
    if (!user.token && localStorage.getItem('token')){
      setUser({
        user_id: JSON.parse(localStorage.getItem('user_id')!),
        first_name: JSON.parse(localStorage.getItem('first_name')!),
        last_name: JSON.parse(localStorage.getItem('last_name')!),
        username: JSON.parse(localStorage.getItem('username')!),
        email: JSON.parse(localStorage.getItem('email')!),
        token: JSON.parse(localStorage.getItem('token')!)
      })
    }
  },[])

  return (
    // react fragment <> </> since all items need to be wrapped in/belong to a parent class. This stops the clutter.
    <Container fluid className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/user-page/:username" element={<UserPage />} />
          <Route path="/grammar-case" element={<GrammarPage/>} />
          <Route path="/lax-saga" element={<LaxdoelaSagaPage/>} />
          <Route path="/resources" element={<ResourcesPage/>} />
          <Route path="/texts" element={<TextsPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
