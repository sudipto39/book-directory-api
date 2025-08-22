const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookControllers");

router
  .route("/")
  .post(bookController.createBook)
  .get(bookController.getAllBooks);

router
  .route("/:id")
  .get(bookController.getBookById)
  .patch( bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;