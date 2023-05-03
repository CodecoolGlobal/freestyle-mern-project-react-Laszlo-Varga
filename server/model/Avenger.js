const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const heroSchema = new Schema({
  id: String,
  name: String,
  description: String,
  thumbnail: Object,
  urls: Array,
});

const Hero = model("avengers", heroSchema, "avengers");

module.exports = Hero;