const express = require("express");
const router = express.Router();
const { getBibleVerse } = require("../controllers/bibleController");

router.get("/:passage", getBibleVerse);

module.exports = router;
