import React from "react";
import "./RutgersHeader.css";
import logo from "../../img/RUTGERS_REVWHITE.png";

const RutgersHeader = () => {
  return (
    <div className="rutgers">
      <div className="rutgers-logo">
        <a href="https://www.rutgers.edu">
          <img src={logo} alt="Rutgers Logo" style={{ maxWidth: "464px" }} />
        </a>
      </div>
      <div className="rutgers-menu">
        <ul>
          <li>
            <a href="https://newbrunswick.rutgers.edu/">
              Rutgers–New Brunswick
            </a>
          </li>
          <li>
            <a href="https://my.rutgers.edu">myRutgers</a>
          </li>
          <li>
            <a href="https://search.rutgers.edu/web.html">Search Rutgers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RutgersHeader;
