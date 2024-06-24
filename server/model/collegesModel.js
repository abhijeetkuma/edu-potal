import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "edupotal",
  password: "password",
  port: 5432,
});

//get all colleges our database
const getColleges = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("select * from colleges", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
//create a new college record in the databsse
const addColleges = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      college_name,
      college_url,
      tag_line,
      usp_remark,
      meta_title,
      meta_keyword,
      found_year,
    } = body;
    pool.query(
      "INSERT INTO colleges(college_name,college_url,tag_line,usp_remark,meta_title,meta_keyword,found_year) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING *",
      [
        college_name,
        college_url,
        tag_line,
        usp_remark,
        meta_title,
        meta_keyword,
        found_year,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new college details has been added: ${JSON.stringify(
              results.rows[0]
            )}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
//delete a merchant
const deleteCollege = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM colleges WHERE cid = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Vehicle deleted with ID: ${id}`);
      }
    );
  });
};
//update a merchant record
const updateVehicle = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "UPDATE colleges SET name = $1, email = $2 WHERE cid = $3 RETURNING *",
      [name, email, veh_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Vehicle updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

//get all merchants our database
const getVehiclesnumbers = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT veh_id,veh_registration_no FROM public.vehicles ORDER BY veh_registration_no DESC",
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
export {
  getColleges,
  addColleges,
  deleteCollege,
  updateVehicle,
  getVehiclesnumbers,
};
