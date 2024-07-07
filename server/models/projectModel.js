const { Pool } = require('pg');

const PG_URI = process.env.PG_URI;

// create a new pool using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// export an object with property query
// which is a function that returns the invocation of pool.query() after logging the query
// this will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
