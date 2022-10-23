import React from "react";
//import components needed
import ContactCard from "./ContactCard";
//import navigation method
import { useNavigate } from "react-router-dom";

function Contact(props) {
  //create a const to use the navigation method
  const navigate = useNavigate();
  //create a handler that excutes the delete method
  const deleteContacthandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        key={index}
        clickHandler={
          deleteContacthandler
        } /* the click handler passes the id to delete */
      />
    );
  });
  return (
    <>
      <div
        className=""
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2> Contact list</h2>
        <button className="ui button blue" onClick={() => navigate("/add")}>
          ADD CONTACT
        </button>
      </div>

      <div className="ui celled list">{renderContactList}</div>
    </>
  );
}

export default Contact;
