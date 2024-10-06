const express = require("express");
const router = express.Router();
const {
  getVendeurs,
  createVendeur,
  updateVendeur,
  deleteVendeur,
} = require("../Controllers/vendeur.controller");

router.get("/", getVendeurs);
router.post("/", createVendeur);
router.patch("/:id", updateVendeur);
router.delete("/:id", deleteVendeur);

module.exports = router;
