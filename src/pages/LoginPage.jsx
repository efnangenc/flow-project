import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/loginPage.scss";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); //otomatik refreshi ortadan kaldır
    try {
      await login(username, password);
      navigate("/home");
      console.log("Giriş başarılı!!.");
    } catch (error) {
      alert("Login failed!!!!!!!!!");
      setUserName("");
      setPassword("");
      console.log("Hatalı giriş!!!!!...");
    }
  };

  return (
    <div className="test">
      <div className="login-page">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="UserName"
            />
          </div>
          <div className="form-group">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <input className="button" type="submit" value={"Login"} />
          </div>

          <button>
            <Link to="/home">Giriş yapmadan devam etmek için...!</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
