import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [state, setState] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const add = (e) => {
    //to stop refreshing
    e.preventDefault();
    if (state.name === "" && state.email === "") {
      alert("all the fields are mandatory");
    } else {
      //use the handler to fill the state in the app component
      addContactHandler(state);
      //empty the fields after submition
      setState({ name: "", email: "" });
      navigate("/");
    }
  };
  return (
    <div className="ui main">
      <h2>Add Contact </h2>
      <form className="ui form " onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name "
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              setState({ name: e.target.value, email: state.email })
            }
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email "
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              setState({ name: state.name, email: e.target.value })
            }
          />
        </div>

        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};
export default AddContact;

// export default class AddContact extends React.Component {
//   state = {
//
//   };

//   render() {
//     return (

//     );
//   }
// }
