const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
});

module.exports = router;
