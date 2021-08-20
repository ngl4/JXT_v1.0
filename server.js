// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT copyright 2021" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});