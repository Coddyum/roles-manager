const express = require("express");
const router = express.Router();
const db = require("../database");

// Route POST : Ajouter un nouveau rôle
router.post("/roles", (req, res) => {
    const { name, color } = req.body;
    if (!name || !color) {
        return res.status(400).json({ error: "Name and color are required" });
    }

    const query = "INSERT INTO roles (name, color) VALUES (?, ?)";
    db.run(query, [name, color], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: this.lastID, name, color });
        }
    });
});

// Route GET : Récupérer tous les rôles
router.get("/roles", (req, res) => {
    const query = "SELECT * FROM roles";
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message }); // En cas d'erreur SQL
        } else {
            res.status(200).json(rows); // Renvoie tous les rôles
        }
    });
});

module.exports = router;
