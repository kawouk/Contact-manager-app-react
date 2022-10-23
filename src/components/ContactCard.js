import React from "react";
import { Link } from "react-router-dom";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div key={id}
      className="item"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={{ pathname: `contact/${id}`, state: { contact: props.contact   } }}
      >
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </Link>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        /*getting the ID of the contact by clicking the trash icon */
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}

export default ContactCard;
