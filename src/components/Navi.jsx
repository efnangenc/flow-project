import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/navi.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Navi = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getCurrentUser = async () => {
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userToken")).access_token
        }`,
      },
    });
    const user = response.data;
    setCurrentUser(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getCurrentUser();
    }
  }, [isAuthenticated]);

  return (
    <>
      <nav>
        <div id="xx" className="brand">
          <h3>FLOWW</h3>
        </div>
        <div className="background">
        <img
          src="https://i.pinimg.com/736x/3f/2f/82/3f2f82e9757694192f49d05a46d79b8d.jpg"
          alt="Background"
        />
      </div>
        <div className="usercard">
          {/* <li>
            <NavLink to="/ank18">botanique tema</NavLink>
          </li>
          <li>
            <NavLink to="/ank18">Logout</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li> */}

          {isAuthenticated && ( //isaUth true ise göster
            <>
              <img
                src="https://i.pinimg.com/236x/4e/7e/10/4e7e108ff07c3e5183b77c98912adbfc.jpg"
                alt=""
              />
              <span>{currentUser.name + "/" + currentUser.role}</span>
            </>
          )}
          <button onClick={isAuthenticated ? handleLogout : handleLogin}>
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
      <hr />
      {/* <Outlet /> */}
    </>
  );
};

export default Navi;
