import React from "react";
import { Link } from "react-router-dom";
import "../styles/User.css";

const User = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="card flex my-2 user-summary">
        <img src={user.photo} alt="User" />
        <div className="user-name">
          <strong>{user.name}</strong>
        </div>
      </div>
    </Link>
  );
};

export default User;
