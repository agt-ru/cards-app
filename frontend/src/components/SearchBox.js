import React, { useState, useEffect } from "react";

const SearchBox = ({ history, location }) => {
  const [keyword, setKeyword] = useState("");

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
      history.push(`/search/${keyword.trim()}`);
      setKeyword(keyword.trim());
    } else {
      history.push(`/`);
    }
  };

  return (
    <form onSubmit={submitHandler} inline>
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
