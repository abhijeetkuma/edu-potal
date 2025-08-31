const { query } = require("express");
const config = require("../../config/config.js");

const Pool = require("pg").Pool;

const pool = new Pool({
  user: config.dbuser,
  host: config.dbhost,
  database: config.dbname,
  password: config.dbpassword,
  port: config.dbport,
});

const autosuggest = (college_name) => {
  //const cms_url = cms_url;
  return new Promise(function (resolve, reject) {
    const query =
      "SELECT college_name FROM colleges where status='A' AND college_name ILIKE $1 ORDER BY college_name ASC LIMIT 20";
    pool.query(query, ["%" + college_name + "%"], (error, results) => {
      if (error) {
        reject(error);
      }
      if (results && results.rows) {
        resolve(results.rows);
      }
    });
  });
};
module.exports = {
  autosuggest,
};
