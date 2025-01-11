const { query } = require("express");
const config = require("../../config/config.js");

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

const filtercollegetypes = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "select col_type, college_type, (select count(cid) from colleges WHERE col_type = any(string_to_array(ctype,',')::int[]) ) total_count  FROM collegetype ORDER BY college_type ASC",
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
const filtercourses = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "select cour_id, course_name, (select count(cid) from colleges where courses IS NOT NULL and cour_id = any(string_to_array(courses,',')::int[]) )  total_count  from courses",
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
const filterstate = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "select sl.sta_id,sl.state_name, count(sl.sta_id) total_count from state_list sl join colleges c on sl.sta_id::varchar = c.state group by sl.sta_id,sl.state_name  ORDER BY total_count DESC",
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
const filtercity = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "select ct.cit_id,ct.city_name, count(ct.cit_id) total_count from city_list ct  join colleges c on ct.cit_id::varchar = c.city group by ct.cit_id,ct.city_name ORDER BY total_count DESC",
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
  filtercollegetypes,
  filtercourses,
  filterstate,
  filtercity,
};
