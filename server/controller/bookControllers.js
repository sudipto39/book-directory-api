const Book = require("../models/Book");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createBook = catchAsync(async (req, res, next) => {
  const newBook = await Book.create(req.body);

  res.status(201).json({
    status: "success",
    message: "Book created successfully",
    data: newBook,
  });
});

exports.getAllBooks = catchAsync(async (req, res, next) => {
  const books = await Book.find();

  res.status(200).json({
    status: "success",
    message: "All books fetched successfully",
    results: books.length,
    data: books,
  });
});

exports.getBookById = catchAsync(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) return next(new AppError("Book not found", 404));

  res.status(200).json({
    status: "success",
    message: "Book fetched successfully",
    data: book,
  });
});

exports.updateBook = catchAsync(async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book) return next(new AppError("Book not found", 404));

  res.status(200).json({
    status: "success",
    message: "Book updated successfully",
    data: book,
  });
});

exports.deleteBook = catchAsync(async (req, res, next) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) return next(new AppError("Book not found", 404));

  res.status(204).json({
    status: "success",
    message: "Book deleted successfully",
    data: null,
  });
});

