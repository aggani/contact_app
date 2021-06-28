import React from "react";

const ContactCard = (props) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="header">{props.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
