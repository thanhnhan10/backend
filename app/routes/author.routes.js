const express = require('express');
const Authors = require("../controllers/author.controller");

module.exports = (app) => {
    const router = express.Router();

    router.route("/")
        .get(Authors.findAll)
        .post(Authors.create)
        .delete(Authors.deleteAll);

    router.route("/:id")
        .get(Authors.findOne)
        .put(Authors.update)
        .delete(Authors.delete);

    app.use("/api/authors", router);
}