import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUserDetails } from "../actions/userActions";
import "../styles/User.css";

const UserScreen = () => {
  let match = useRouteMatch();
  let history = useHistory();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    dispatch(listUserDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <button className="btn" onClick={() => history.goBack()}>
        GO BACK
      </button>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="container flex">
          <div className="card flex user-details">
            <img src={user.photo} alt="Avatar" className="py-1"/>
            <h3 className="">{user.name}</h3>
            <ul className="flex">
              <div className="mx-1 user-details-column">
                <li>City: {user.city}</li>
                <li>Job Title: {user["job title"]}</li>
                <li>Car: {user.car && `${user.car.color} ${user.car.make}`}</li>
              </div>
              <div className="mx-1 user-details-column">
                <li>
                  {" "}
                  Friends:
                  {user.friends &&
                    user.friends.map((friend) => (
                      <div id={friend} key={friend}>
                        {friend}
                      </div>
                    ))}
                </li>
              </div>
            </ul>
            <div className="py-1 user-details-motto">Motto: {user.trivia}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserScreen;
