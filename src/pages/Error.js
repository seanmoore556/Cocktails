import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error_page section">
      <div className="error_container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn_primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
