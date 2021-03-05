import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";

const UserScreen = () => {
  let match = useRouteMatch();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/get/${match.params.id}`);

      setUser(data);
      console.log(data);
    };

    fetchUser();
  }, []);

  return (
    <>
      <Link className="btn my-3" to="/">
        Go Back
      </Link>
      <section className="my-2">
        <div className="container">
          <div className="card flex">
            <img src={user.photo} alt="Avatar" />
            <h3>{user.name}</h3>
            <ul>
              <li>City: {user.city}</li>
              <li>Job Title: {user["job title"]}</li>
              <li>Motto: {user.trivia}</li>
              <li>Car: {user.car && `${user.car.color} ${user.car.make}`}</li>
              <li>
                {" "}
                Friends:
                <div className="card">
                  {user.friends &&
                    user.friends.map((friend) => (
                      <div id={friend}>{friend}</div>
                    ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserScreen;
