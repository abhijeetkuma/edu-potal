const { query } = require("express");
const config = require("../config/config.js");

const Pool = require("pg").Pool;

const pool = new Pool({
  user: config.dbuser,
  host: config.dbhost,
  database: config.dbname,
  password: config.dbpassword,
  port: config.dbport,
});

const getAvertisementlisting = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM advertisement ORDER BY ad_id DESC",
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

const getAvertisement = (notif_id) => {
  //const notif_id = notif_id;
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM advertisement WHERE ad_id = $1",
      [notif_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        }

        //resolve(`Edit Notification ID: ${notif_id}`);
      }
    );
    console.log(query);
  });
};
const updateAvertisementlisting = (notif_id, body) => {
  return new Promise(function (resolve, reject) {
    const {
      notif_id,
      notification_title,
      notification_url,
      notification_target,
      notification_position,
      notification_status,
    } = body;
    pool.query(
      "UPDATE advertisement SET notification_title = $2,notification_url=$3, notification_target=$4,notification_position=$5,notification_status=$6 WHERE notif_id = $1 RETURNING *",
      [
        notif_id,
        notification_title,
        notification_url,
        notification_target,
        notification_position,
        notification_status,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Notification updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getAvertisementlisting,
  getAvertisement,
  updateAvertisementlisting,
};
