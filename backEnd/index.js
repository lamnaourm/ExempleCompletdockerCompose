const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DirectorRoute = require("./routes/director");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(`mongodb://db:27017/dbmovies`, { useNewUrlParser: true })
  .then(() => console.log("connexion reussie"))
  .catch((error) => console.log('Erreur de connexion' + error));

app.use('/director', DirectorRoute);

app.listen(3000, (err) => {
  if (!err) console.log("Enable to start server ...");
  else console.log("Server started ...");
});
