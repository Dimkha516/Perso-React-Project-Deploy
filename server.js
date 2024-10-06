const express = require("express");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const connectToMongo = require("./config/dbConnect");

const commandesRouter = require("./src/routes/commande.route");
const clientsRouter = require("./src/routes/client.route");
const articlesRouter = require("./src/routes/article.route");
const vendeursRouter = require("./src/routes/vendeur.route");

const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const prisma = new PrismaClient();

// CONNECTION CLUSTER:
connectToMongo();

// MIDDLEWARE POUR PARSER LE JSON:
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UTILISATIONS DES ROUTERS:
app.use("/commandes", commandesRouter);
app.use("/clients", clientsRouter);
app.use("/articles", articlesRouter);
app.use("/vendeurs", vendeursRouter);

app.listen(port, () => {
  console.log(`Backend running cool on ${port}`);
});
