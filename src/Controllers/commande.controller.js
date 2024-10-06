const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Récupérer toutes les commandes
exports.getCommandes = async (req, res) => {
  try {
    const commandes = await prisma.commande.findMany();
    res.json(commandes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des commandes.", err });
  }
};

// Créer une nouvelle commande
exports.createCommande = async (req, res) => {
  const { articleIds, montant, clientId, vendeurId } = req.body;
  try {
    const newCommande = await prisma.commande.create({
      data: {
        clientId,
        vendeurId,
        articleIds,
        montant,
        // La date sera automatiquement définie par défaut
      },
    });
    res.json(newCommande);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de la commande.", error });
  }
};

// Mettre à jour une commande
exports.updateCommande = async (req, res) => {
  const { id } = req.params;
  const { articles, montant, date, vendeurId, clientId } = req.body;
  try {
    const updatedCommande = await prisma.commande.update({
      where: { id },
      data: { articles, montant, date, vendeurId, clientId },
    });
    res.json(updatedCommande);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de la commande." });
  }
};

// Supprimer une commande
exports.deleteCommande = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.commande.delete({
      where: { id },
    });
    res.json({ message: "Commande supprimée avec succès." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la commande." });
  }
};
