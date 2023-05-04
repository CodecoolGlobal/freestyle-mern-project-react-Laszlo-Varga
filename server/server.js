const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Hero = require("./model/Avenger");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});


app.get("/heroes", (req, res, next) => {
  Hero.find()
    .then((heroes) => {
      res.status(200).json(heroes);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
})

app.post("/heroes", (req, res, next) => {
  const hero = new Hero({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    urls: req.body.urls
  });

  hero
    .save()
    .then(() => {
      res.status(201).json({
        message: "Hero created successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
})

app.delete('/heroes/:id', (req, res) => {
  console.log(req.params);
  Hero.deleteOne({ _id: req.params.id })
  .then(() => {
    res.status(201).json({
      message: "Hero removed from team",
    });
  })
  .catch((error) => {
    res.status(400).json({
      error: error,
    })
  })
});

mongoose
  .connect(
    "mongodb+srv://silverhornvargalaci:Ks2XTrXxPBVbq6Vx@cluster0.hxgfust.mongodb.net/AVENGERS?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });



app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});
