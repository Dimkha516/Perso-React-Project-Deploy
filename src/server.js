const express = require("express");
const { PrismaClient } = require("@prisma/client");
const connectDB = require("../config/dbConnect");
connectDB();
const port = process.env.PORT || 5001;


const app = express();
const dotenv = require("dotenv").config();
// const prisma = new PrismaClient();

// CONNECTION À MONGODB:

// MIDDLEWARE POUR PARSER LE JSON:
app.use(express.json());


app.listen(port, () => {
  console.log(`Backend running on ${port}`);
});
