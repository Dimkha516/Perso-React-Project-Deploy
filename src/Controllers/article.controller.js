const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// RÉCUPÉRER LES ARTICLES:
exports.getArticles = async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    res.json(articles);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur de récupération des articles", err });
  }
};

// CRÉER UN NOUVEL ARTICLE:
exports.createArticle = async (req, res) => {
  const { image, libelle, prix, stock } = req.body;

  try {
    const newArticle = await prisma.article.create({
      data: {image, libelle, prix, stock },
    });
    res.status(201).json({ message: "Article crée avec succès", newArticle });
  } catch (err) {
    res.status(500).json({ message: "erreur création Article", err });
  }
};

// METTRE À JOUR UN ARTICLE:
exports.updateArticle = async (req, res) => {
  const { id } = req.params;
  const { libelle, prix, stock } = req.body;

  try {
    const updatedArticle = await prisma.article.update({
      where: { id },
      data: { libelle, prix, stock },
    });
    res.json({ message: "Article modifié avec succès", updatedArticle });
  } catch (err) {
    res.status(500).json({ message: "Erreur modification article", err });
  }
};

// SUPPRIMER UN ARTICLE:
exports.deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedArticle = await prisma.article.delete({
      where: { id },
    });
    res.json({ message: "Article supprimé avec succès !" });
  } catch (err) {
    res.status(500).json({ message: "Erreur suppression article", err });
  }
};
