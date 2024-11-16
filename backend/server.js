const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Importation de CORS

const app = express();
app.use(cors()); // Middleware CORS global

app.use(express.json()); // Permet de parser les requêtes en JSON

// Connexion à la base de données MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/role_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
});

const Role = mongoose.model("Role", roleSchema);

// Route pour ajouter un rôle
app.post("/roles", async (req, res) => {
    try {
        const { name, color } = req.body;
        const newRole = new Role({ name, color });
        await newRole.save();
        res.status(201).send(newRole);
    } catch (error) {
        res.status(500).send({ error: "Erreur lors de la création du rôle." });
    }
});

// Route pour récupérer les rôles
app.get("/roles", async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send({
            error: "Erreur lors de la récupération des rôles.",
        });
    }
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
