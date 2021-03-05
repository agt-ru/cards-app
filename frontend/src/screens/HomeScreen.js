import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

import User from "../components/User";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <section className="my-2">
          <div className="container grid grid-3">
            {users.map((user) => (
              <div key={user.id} className="card flex">
                <User user={user} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HomeScreen;
