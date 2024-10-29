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

const topNotification = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM notifications ORDER BY notif_id DESC",
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
const featuredColleges = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT c.cid,c.college_name,c.college_url,c.logo,c.averageplacementrecord,s.state_name,ct.city_name  FROM colleges c LEFT JOIN state_list s ON c.state = s.sta_id::varchar LEFT JOIN city_list ct on c.city = ct.cit_id::varchar WHERE c.featured ='Y' GROUP BY c.cid ,s.state_name,ct.city_name ORDER BY c.cid DESC  LIMIT 15",
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
const topPopularcolleges = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT c.cid,c.college_name,c.college_url,c.logo,c.totalplacementratio,c.lowestplacementrecord,c.higestplacementrecord,regexp_count(c.courses, ',') + 1  total_courses, string_agg(distinct e.exam_name,', ') exam_name,string_agg(distinct a.approved_name,', ') approved_by, string_agg(distinct cty.college_type,', ') college_types,c.banner,s.state_name,ct.city_name FROM colleges c  LEFT JOIN state_list s ON c.state = s.sta_id::varchar LEFT JOIN city_list ct on c.city = ct.cit_id::varchar LEFT JOIN examnames e ON e.exam_id = any(string_to_array(c.exams,',')::int[]) LEFT JOIN approvedby a ON a.approv_id = any(string_to_array(c.approvedby,',')::int[]) LEFT JOIN collegetype cty ON cty.col_type = any(string_to_array(c.ctype,',')::int[])  GROUP BY c.cid ,s.state_name,ct.city_name ORDER BY c.cid DESC  LIMIT 8",
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
const goal = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT cat.cat_id, cat.category_name, string_agg(distinct c.course_name,', ') courses, string_agg(distinct c.course_url,', ') course_url,count(co.cid) total_colleges FROM categories cat JOIN courses c on c.cour_id = any(string_to_array(cat.cour_ids,',')::int[]) LEFT JOIN colleges co on cat.cat_id=any(string_to_array(co.categories,',')::int[]) WHERE cat.category_status='A' GROUP BY cat.cat_id ORDER BY cat_id DESC LIMIT 15",
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
const exams = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM newsarticles WHERE na_type='e' ORDER BY na_id DESC LIMIT 15",
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
const newsandupdates = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM newsarticles WHERE na_type !='e' ORDER BY na_id DESC LIMIT 15",
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
const studybycities = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM city_list where city_top = 'Y' ORDER BY city_name ASC LIMIT 25",
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
  topNotification,
  featuredColleges,
  goal,
  topPopularcolleges,
  exams,
  newsandupdates,
  studybycities,
};
