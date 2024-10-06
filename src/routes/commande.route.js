const express = require("express");
const {
  getCommandes,
  createCommande,
  updateCommande,
  deleteCommande,
} = require("../Controllers/commande.controller");
const router = express.Router();

// GETS:
router.get("/", getCommandes);

// POSTS:
router.post("/", createCommande);

// PATCH:
router.patch("/:id", updateCommande);

// DELETE:
router.delete("/:id", deleteCommande);

module.exports = router;
