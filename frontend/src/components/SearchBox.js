import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/SearchBox.css";

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
    <form onSubmit={submitHandler} className="flex">
      <input
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search users..."
        className="search-input"
        value={keyword}
      ></input>
      <button type="submit" className="btn search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
