import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import users from "./data/users.js";

dotenv.config();
const app = express();

app.use(express.json());

// @desc    Fetch all users
// @route   GET /api
// /api?keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}
// @access  Public
app.get("/api", (req, res) => {
  const usersPerPage = Math.floor(Math.abs(Number(req.query.pageSize) || 5));
  const page = Math.floor(Math.abs(Number(req.query.pageNumber) || 1));
  let usersMatch, usersMatchCount;
  if (req.query.keyword) {
    const myRe = new RegExp(req.query.keyword, "i");
    usersMatch = users.filter((u) => myRe.test(u.name));
    usersMatchCount = usersMatch.length;
  } else {
    usersMatch = users;
    usersMatchCount = users.length;
  }
  const pages = Math.ceil(usersMatchCount / usersPerPage);
  let usersOnPage = usersMatch.slice((page - 1) * usersPerPage, page * usersPerPage);
  usersOnPage = usersOnPage.map((user) => ({ ...user, id: user.id["$oid"] }));
  res.json({
    usersOnPage,
    page,
    pages,
    usersPerPage: String(usersPerPage),
  });
});

// @desc    Fetch single user
// @route   GET /api/get/:id
// @access  Public
app.get("/api/get/:id", (req, res) => {
  const user = users.find((u) => u.id["$oid"] === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
