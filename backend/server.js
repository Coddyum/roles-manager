const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = 5001;

// MIddleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS roles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            color TEXT NOT NULL
        )
    `);
    console.log("Roles table initialized.");
});
