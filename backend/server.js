const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware global
app.use(cors());
app.use(bodyParser.json());

// Test route pour vérifier si le serveur fonctionne
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Import des routes
const roleRoutes = require("./routes/roleRoutes");

// Préfixer les routes de rôle avec /api/roles
app.use("/api/roles", roleRoutes);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
