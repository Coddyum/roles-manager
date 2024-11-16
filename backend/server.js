const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

const roleRoutes = require("./routes/roleRoutes");
app.use("/api", roleRoutes);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
