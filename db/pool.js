const { Pool } = require("pg");
require('dotenv').config(); 

module.exports = new Pool({
    connectionString: process.env.DB_URI,
    ssl: {
      rejectUnauthorized: true, // You can set this to true in production if you have a valid certificate
    }
  })