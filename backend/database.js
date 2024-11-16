const sqlite3 = require("sqlite3").verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database("./roles.db", (err) => {
    if (err) {
        console.error("Error connecting to SQLite:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

module.exports = db;
