import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
     <div className="container myheader">
     <div className="container">
     <div className="row">
     <div className="col-6 col-sm-3 saved"><strong><i className="fas fa-quran fa-4x style"><h1>GOOGLE BOOKS</h1></i></strong> </div>
     <br/>
     <Link to="/Saved" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <h4>Saved</h4>
        </Link>
      
    </div>
    </div>
  </div>
   </header>
    
  );
}

export default Header;
