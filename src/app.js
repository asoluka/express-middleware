const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const { getAllBooks, createBook } = require("./controllers/books.controller");
const validateBooksCreate = require("./middlewares/weakValidator");

// Express app
const app = express();

// Variables
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" }
);

// Middlewares
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));

// Routes
app.get("/books", getAllBooks);
app.post("/books", validateBooksCreate, createBook);

module.exports = app;
