const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || ""
  // database: process.env.PGDATABASE,
  // host: process.env.PGHOST,
  // password: process.env.PGPASSWORD,
  // port: process.env.PGPORT,
  // user: process.env.PGUSER,
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
