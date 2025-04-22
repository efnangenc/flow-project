import React from "react";
import Navi from "./components/Navi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import PrivateRoute from "./services/PrivateRoute";
import Form from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        {/* <Route path="ank18" element={<Navi />}> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/home" element={<PrivateRoute special={<Form />} />} />
        </Route>
        <Route path="detail/:cardId" element={<DetailPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
