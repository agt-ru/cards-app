import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUserDetails } from "../actions/userActions";

const UserScreen = () => {
  let match = useRouteMatch();
  let history = useHistory();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userList = useSelector((state) => state.userList);
  const { usersPerPage } = userList;  

  useEffect(() => {
    dispatch(listUserDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {/* <Link className="btn my-3" to="/">
        Go Back
      </Link> */}
        {/* <Link to={`/${usersPerPage && (usersPerPage !== 5 ? `size/${usersPerPage}` : '')}`} className="btn">
          Go Back
        </Link> */}
        <button onClick={() => history.goBack()}>GO BACK A PAGE</button>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
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
                        <div id={friend} key={friend}>{friend}</div>
                      ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserScreen;
