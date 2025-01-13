import React from 'react'
import '../assets/styles/navi.scss'

const Navi = () => {
  return (
    <>
      <nav>
        <div id="xx" className="brand">
        {/* <img src={Logo} alt="" /> */}
          <h3>FLOWW</h3>
        </div>
        <div className="usercard">
          <span>botanique tema
          </span>
          <span>Logout</span>
          <a href="#esb">Login</a>
          <img
            src="https://i.pinimg.com/236x/4e/7e/10/4e7e108ff07c3e5183b77c98912adbfc.jpg"
            alt=""
          />
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Navi