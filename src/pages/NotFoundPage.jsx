import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const NotFoundPage = () => {
  return (
    <section className="notFoundWrap">
      <p className="notFoundCode">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or has been moved.</p>
      <Link to="/" className="backHomeBtn">
        Back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
