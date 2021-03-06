import React from "react";
import Pagination from "react-router-pagination";

const Paginate = ({ pages, page, keyword = "" }) => {
  const route = keyword
    ? "/search/:keyword/page/:pageNumber"
    : "/page/:pageNumber";
  const match = {
    path: route,
    params: {
      keyword: keyword,
      pageNumber: page,
    },
  };
  return (
    pages > 1 && (
      <Pagination totalPages={pages} pageNumber={page} match={match} />
    )
  );
};

export default Paginate;
