import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import Dropdown from "react-dropdown";

import User from "../components/User";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const keyword = match.params.keyword;
  let pageNumber = match.params.pageNumber || 1;
  let pageSize = match.params.pageSize || 5;

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users, page, pages, pageSize } = userList;
  
  const pageSizeOptions = ["5", "10", "15"];
// console.log(typeof(pageSize));
  useEffect(() => {
    dispatch(listUsers(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const changeUsersPerPage = (e) => {
    // setPageSize(e.value);
    dispatch(listUsers(keyword, 1, e.value));
    const urlToGo = (keyword ? `/search/${keyword}` : ``) + `/page/1`;
    history.push(urlToGo);
  };

  return (
    <>
      <Dropdown
        options={pageSizeOptions}
        onChange={changeUsersPerPage}
        value={pageSize}
        placeholder="Select an option"
      />
      <h1>Users</h1>
      {keyword && (
        <Link to="/" className="btn">
          Go Back
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="my-2">
          <div className="container grid grid-3">
            {users.map((user) => (
              <div key={user.id} className="card flex">
                <User user={user} />
              </div>
            ))}
          </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
