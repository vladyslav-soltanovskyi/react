import React from "react";
import { links } from "./routes";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="page__content">
      <h1>Contacts</h1>
      <p>We are here 🗺</p>
      <Link to={links.Home}>Go home</Link>
    </div>
  );
}

export default Contacts;