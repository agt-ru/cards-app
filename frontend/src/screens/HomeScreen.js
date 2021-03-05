import React, { useState, useEffect } from "react";
import axios from "axios";

import User from "../components/User";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("/api");

      setUsers(data.usersOnPage);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <section className="my-2">
        <div className="container grid grid-3">
          {users.map((user) => (
            <div key={user.id} className="card flex">
              <User user={user} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
