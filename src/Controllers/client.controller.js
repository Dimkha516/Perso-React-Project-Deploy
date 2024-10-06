const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Récupérer tous les clients
exports.getClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des clients.", error });
  }
};

// Créer un nouveau client
exports.createClient = async (req, res) => {
  const { nomComplet, telephone } = req.body;
  try {
    const newClient = await prisma.client.create({
      data: { nomComplet, telephone }
    });
    res.json(newClient);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du client." });
  }
};

// Mettre à jour un client
exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { nomComplet, telephone } = req.body;
  try {
    const updatedClient = await prisma.client.update({
      where: { id },
      data: { nomComplet, telephone }
    });
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du client." });
  }
};

// Supprimer un client
exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.client.delete({
      where: { id }
    });
    res.json({ message: "Client supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du client." });
  }
};
