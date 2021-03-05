import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="card my-3 p-3">
      <Link to={`/user/${user.id}`}>
        <img src={user.photo} alt="User" />
      </Link>
      <Link to={`/user/${user.id}`}>
        <div className="text-center">
          <strong>{user.name}</strong>
        </div>
      </Link>
    </div>
  );
};

export default User;
