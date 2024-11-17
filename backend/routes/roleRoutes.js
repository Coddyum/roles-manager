const express = require("express");
const router = express.Router();
const db = require("../database");

// Route POST : Ajouter un nouveau rôle
router.post("/", (req, res) => {
    console.log(req.body);
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
router.get("/", (req, res) => {
    const query = "SELECT * FROM roles";
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows); // Renvoie tous les rôles
        }
    });
});

// Route GET : Récupérer un rôle spécifique par son ID
router.get("/:id", (req, res) => {
    const roleId = req.params.id;

    const query = "SELECT * FROM roles WHERE id = ?";
    db.get(query, [roleId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ message: "Rôle introuvable" });
        } else {
            res.status(200).json(row); // Renvoie le rôle trouvé
        }
    });
});

// Route DELETE : Supprimer un rôle spécifique par son ID
router.delete("/:id", (req, res) => {
    const roleId = req.params.id;

    const sql = "DELETE FROM roles WHERE id = ?";
    db.run(sql, roleId, function (err) {
        if (err) {
            res.status(500).json({ error: "Une erreur est survenue." });
            return;
        }

        if (this.changes === 0) {
            res.status(404).json({ message: "Rôle introuvable." });
        } else {
            res.status(200).json({ message: "Rôle supprimé avec succès." });
        }
    });
});

module.exports = router;
