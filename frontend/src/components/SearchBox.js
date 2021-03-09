import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SearchBox = ({ history, location, match }) => {
  const [keyword, setKeyword] = useState("");

  const userList = useSelector((state) => state.userList);
  const { usersPerPage } = userList;
  const pageSize = usersPerPage || 5;

  useEffect(() => {
    if (
      location.pathname.split("/")[1] !== "search" &&
      location.pathname.split("/")[1] !== "user"
    ) {
      setKeyword("");
    }
  }, [location]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword.trim()}/size/${pageSize}`);
      setKeyword(keyword.trim());
    } else {
      history.push(`/`);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search users..."
        className="mr-sm-2 ml-sm-5"
        value={keyword}
      ></input>
      <button type="submit" className="p-2 btn">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
