const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// RÉCUPÉRER LES VENDEURS:
exports.getVendeurs = async (req, res) => {
  try {
    const vendeurs = await prisma.vendeur.findMany({
      select: {
        nomComplet: true,
        email: true,
      },
    });
    res.json({ vendeurs });
  } catch (err) {
    res.status(500).json({ message: "Erreur récupération des vendeurs", err });
  }
};

// CRÉER UN NOUVEAU VENDEUR:
exports.createVendeur = async (req, res) => {
  const { nomComplet, email, password } = req.body;

  try {
    const newVendeur = await prisma.vendeur.create({
      data: { nomComplet, email, password },
    });
    res.json(newVendeur);
  } catch (err) {
    res.status(500).json({ message: "Erreur création vendeur", err });
  }
};

// METTRE À JOUR UN VENDEUR:
exports.updateVendeur = async (req, res) => {
  const { id } = req.params;
  const { nomComplet, email, password } = req.body;

  try {
    const updatedVendeur = await prisma.vendeur.update({
      where: { id },
      data: { nomComplet, email, password },
    });
    res.json(updatedVendeur);
  } catch (err) {
    res.status(500).json({ message: "Erreur modification vendeur", err });
  }
};

// SUPPRIMER UN VENDEUR:
exports.deleteVendeur = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedVendeur = await prisma.vendeur.delete({
      where: { id },
    });
    res.json({ message: "Vendeur supprimé avec succès." });
  } catch (err) {
    res.status(500).json({ message: "Erreur suppression vendeur", err });
  }
};
