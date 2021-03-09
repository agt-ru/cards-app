import React from "react";
import Pagination from "react-router-pagination";

const Paginate = ({ pages, page, keyword = "", usersPerPage }) => {
  const route = keyword
    ? "/search/:keyword/page/:pageNumber/size/:pageSize"
    : "/page/:pageNumber/size/:pageSize";
  const match = {
    path: route,
    params: {
      keyword: keyword,
      pageNumber: page,
      pageSize: usersPerPage,
    },
  };
  return (
    pages > 1 && (
      <Pagination totalPages={pages} pageNumber={page} match={match} />
    )
  );
};

export default Paginate;
