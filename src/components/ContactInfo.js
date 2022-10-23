import React from "react";

import { Link } from "react-router-dom";

function ContactInfo(props) {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue"> Back to List</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactInfo;
