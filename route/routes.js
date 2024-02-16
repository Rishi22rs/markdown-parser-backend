const express = require("express");
const { markdown } = require("../controllers/controllers");

const router = express();

router.post("/markdown", markdown); // Route to fetch HTML

module.exports = router;
