const { Pool } = require("pg");

const connectionString = `postgresql://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`

const pool = new Pool({
    connectionString: connectionString
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
