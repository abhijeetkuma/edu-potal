const { query } = require("express");
const config = require("../config/config.js");

const Pool = require("pg").Pool;
/* const pool = new Pool({
  user: "postgres", //timeofcollege
  host: "localhost",
  database: "edupotal", //tocdatabase
  password: "password", //Navi2212
  port: 5432,
}); 
const pool = new Pool({
  user: "tocadmin", //timeofcollege
  host: "164.121.168.184.host.secureserver.net",
  database: "tocprddb", //tocdatabase
  password: "Avi@1985", //Navi2212
  port: 5432,
});*/

const pool = new Pool({
  user: config.dbuser,
  host: config.dbhost,
  database: config.dbname,
  password: config.dbpassword,
  port: config.dbport,
});

const countrylisting = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM countrylist WHERE 1=1 ORDER BY country_name ASC",
        (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        }
      );
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
const countrydetail = (na_url) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM countrylist WHERE caut_id = $1",
      [na_url],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        }
      }
    );
  });
};

const statelisting = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT s.sta_id,s.state_name,c.country_name FROM state_list s JOIN countrylist c ON s.cout_id = c.cout_id WHERE 1=1 ORDER BY s.state_name ASC",
        (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        }
      );
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
const citylisting = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT c.cit_id,c.city_name,c.city_url,s.state_name FROM city_list c JOIN state_list s ON c.stat_id = s.sta_id WHERE 1=1 ORDER BY c.city_name ASC",
        (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        }
      );
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

module.exports = {
  countrylisting,
  countrydetail,
  statelisting,
  citylisting,
};
