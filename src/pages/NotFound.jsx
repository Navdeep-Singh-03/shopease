// src/pages/NotFound.jsx

import { Link } from "react-router-dom";
import "../css/notfound.css";

function NotFound() {
  return (
    <div className="notfound-wrapper">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Looks like the page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="btn-primary">Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;