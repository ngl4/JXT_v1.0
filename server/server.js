// server/index.js
// const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.static(buildPath));

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT copyright 2021" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});