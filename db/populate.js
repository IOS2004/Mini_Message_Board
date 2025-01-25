#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "user" VARCHAR ( 255 ) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  text TEXT NOT NULL
);

INSERT INTO messages ("user", text) 
VALUES
  ('Bryan', 'hi I am bryan'),
  ('Odin', 'wth is this'),
  ('Damon', 'I like postgre');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URI,
    ssl: {
      rejectUnauthorized: true, 
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
