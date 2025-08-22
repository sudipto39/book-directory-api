const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require("morgan");
const PORT = process.env.PORT;
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

app.use(morgan("dev"));
connectDB();

app.use("/api/v1/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});