
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.DB_PASSWORD}@cluster0.p8qnexq.mongodb.net/classicIt?retryWrites=true&w=majority`;

function connectDB() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri)
    .then(() => {
        console.log(`Database connection Successfull`);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
