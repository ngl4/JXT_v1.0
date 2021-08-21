// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT copyright 2021" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});