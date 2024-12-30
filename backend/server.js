const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/messages", (req, res) => {
  res.json([
    { id: 1, text: "Bonjour !" },
    { id: 2, text: "Comment ça va ?" },
    { id: 3, text: "Bienvenue dans notre application !" },
  ]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

