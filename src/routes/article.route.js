const express = require("express");
const {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../Controllers/article.controller");
const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
