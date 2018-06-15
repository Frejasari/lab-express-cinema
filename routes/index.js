const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(err => {
      throw err;
    });
});

/* GET movie detail*/
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log("movie: ", movie);

      res.render("movie", movie);
    })
    .catch(err => {
      throw err;
    });
});

module.exports = router;
