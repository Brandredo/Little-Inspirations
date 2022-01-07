require("dotenv").config();
const mongoose = require('mongoose');

const connectData = async function() {
    try {
      await mongoose.connect(process.env.db_URL);
      console.log("connected to the database");
    } catch (error) {
      console.log("Database failed to connect! error: " + error);
    }
}

module.exports = connectData;