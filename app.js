const express = require("express");
const cors = require("cors");

const bookRoutes = require("./app/routes/book.routes");
const authorRoutes = require("./app/routes/author.routes");

const { BadRequestError, errorHandler } = require("./app/errors");

const app = express();

app.use(cors());
app.use(express.json());

bookRoutes(app);
authorRoutes(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    errorHandler.handleError(err, res);
});

module.exports = app;