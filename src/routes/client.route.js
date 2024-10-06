const express = require("express");
const {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require("../Controllers/client.controller");
const router = express.Router();

//
router.get("/", getClients);

//
router.post("/", createClient);

//
router.patch("/:id", updateClient);

//
router.delete(":/id", deleteClient);

module.exports = router;
