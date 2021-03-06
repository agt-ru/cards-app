import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import Dropdown from "react-dropdown";

import User from "../components/User";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import "../styles/Dropdown.css";

const HomeScreen = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const keyword = match.params.keyword;
  let pageNumber = match.params.pageNumber || 1;
  let pageSize = match.params.pageSize || 5;

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, page, pages, usersPerPage } = userList;

  const pageSizeOptions = ["5", "10", "15"];
  useEffect(() => {
    dispatch(listUsers(keyword, pageNumber, pageSize));
  }, [dispatch, keyword, pageNumber, pageSize]);

  const changeUsersPerPage = (e) => {
    const urlToGo = (keyword ? `/search/${keyword}` : ``) + `/size/${e.value}`;
    history.push(urlToGo);
  };

  return (
    <>
      <div className="flex home-top">
        <h1>Users</h1>
        <div className="page-size flex">
          <span>Page Size: </span>
          <Dropdown
            options={pageSizeOptions}
            onChange={changeUsersPerPage}
            value={usersPerPage}
            placeholder="5"
          />
        </div>
      </div>
      {keyword && (
        <Link
          to={`/${
            usersPerPage && (usersPerPage !== 5 ? `size/${usersPerPage}` : "")
          }`}
          className="btn"
        >
          GO BACK
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="my-2">
          <div className="container grid">
            {users.map((user) => (
              <User user={user} />
            ))}
          </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
            usersPerPage={usersPerPage}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
