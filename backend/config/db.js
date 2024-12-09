const { Client } = require("pg");
require("dotenv").config(); // Load environment variables from .env

// Database connection configuration using environment variables
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

module.exports = client;
