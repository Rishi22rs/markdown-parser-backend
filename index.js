const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse json body
app.use(cors()); // Middleware for CORS
app.use("/api", require("./route/routes")); // All the routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
