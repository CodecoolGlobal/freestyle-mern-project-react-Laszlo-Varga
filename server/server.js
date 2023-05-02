const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(3000, () => { 
  console.log('Server is listening on port 3000.'); 
});