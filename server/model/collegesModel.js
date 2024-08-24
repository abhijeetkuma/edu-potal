const { query } = require("express");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres", //timeofcollege
  host: "localhost",
  database: "edupotal", //tocdatabase
  password: "password", //Navi2212
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
const Login = async (body) => {
  try {
    return await new Promise(function (resolve, reject) {
      const { admin_email, admin_password } = body;
      pool.query(
        "select admin_id,admin_email,admin_contact from adminusers where admin_status='A' and admin_email=$1 and admin_password=$2",
        [admin_email, admin_password],
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

//create a new merchant record in the databsse
const college = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      college_name,
      college_url,
      tag_line,
      usp_remark,
      meta_title,
      meta_keyword,
      meta_description,
      found_year,
      highlights,
      display_type,
      college_descripton,
      address,
      address2,
      landmark,
      pincode,
      country,
      state,
      city,
      contactno,
      faxno,
      email,
      website,
    } = body;
    pool.query(
      "INSERT INTO colleges(college_name,college_url,tag_line,usp_remark,meta_title,meta_keyword,meta_description,found_year,highlights,display_type,college_descripton,address,address2,landmark,pincode,country,state,city,contactno,faxno,email,website) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22) RETURNING *",
      [
        college_name,
        college_url,
        tag_line,
        usp_remark,
        meta_title,
        meta_keyword,
        meta_description,
        found_year,
        highlights,
        display_type,
        college_descripton,
        address,
        address2,
        landmark,
        pincode,
        country,
        state,
        city,
        contactno,
        faxno,
        email,
        website,
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
const deleteVehicle = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM colleges WHERE cid = $1",
      [cid],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Vehicle deleted with ID: ${id}`);
      }
    );
  });
};

const editroles = (rol_id) => {
  //const rol_id = rol_id;
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM roles WHERE rol_id = $1",
      [rol_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        }

        //resolve(`Edit roles ID: ${id}`);
      }
    );
    console.log(query);
  });
};
const editcollege = (cid) => {
  //const rol_id = rol_id;
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM colleges WHERE cid = $1",
      [cid],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        }

        //resolve(`Edit college ID: ${id}`);
      }
    );
    console.log(query);
  });
};
const updateCollege = (cid, body) => {
  return new Promise(function (resolve, reject) {
    const {
      cid,
      college_name,
      college_url,
      tag_line,
      usp_remark,
      found_year,
      intake,
      college_descripton,
      meta_title,
      meta_keyword,
      meta_description,
      display_type,
      address,
      address2,
      landmark,
      pincode,
      country,
      state,
      city,
      contactno,
      faxno,
      email,
      website,
      ctype,
      trading,
      approvedby,
      categories,
      courses,
      hostel_available,
      adminssiondetails,
      scholarshipoffer,
    } = body;
    pool.query(
      "UPDATE colleges SET college_name = $2, college_url = $3,tag_line=$4,usp_remark=$5,found_year=$6,intake=$7,college_descripton=$8,meta_title=$9,meta_keyword=$10,meta_description=$11,display_type=$12,address=$13,address2=$14,landmark=$15,pincode=$16,country=$17,state=$18,city=$19,contactno=$20,faxno=$21,email=$22,website=$23,ctype=$24,trading=$25,approvedby=$26,categories=$27,courses=$28,hostel_available=$29,adminssiondetails=$30 ,scholarshipoffer=$31 WHERE cid = $1 RETURNING *",
      [
        cid,
        college_name,
        college_url,
        tag_line,
        usp_remark,
        found_year,
        intake,
        college_descripton,
        meta_title,
        meta_keyword,
        meta_description,
        display_type,
        address,
        address2,
        landmark,
        pincode,
        country,
        state,
        city,
        contactno,
        faxno,
        email,
        website,
        ctype,
        trading,
        approvedby,
        categories,
        courses,
        hostel_available,
        adminssiondetails,
        scholarshipoffer,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`College updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
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

const getCourses = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT *, case when cstatus = 'A' then 'Active' else 'Inactive' end as status FROM courses ORDER BY cour_id DESC",
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
//get all course arra our database
const getCoursesarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT cour_id,course_name FROM courses WHERE cstatus='A' ORDER BY course_name ASC",
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

const getModulearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT mod_id,module_title FROM modules WHERE module_status='A' ORDER BY module_title ASC",
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
const getCollegetypearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT col_type,college_type FROM collegetype WHERE college_type_status='A' ORDER BY college_type ASC",
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
const getExamlistarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT exam_id,exam_name FROM examnames ORDER BY exam_name ASC",
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
const getCategoriesarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT cat_id,category_name FROM categories ORDER BY category_name ASC",
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
const getApprovedbyarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT approv_id,approved_name FROM approvedby ORDER BY approved_name ASC",
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
const getCoursearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT cour_id,course_name FROM courses ORDER BY course_name ASC",
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
const getRolesrr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT rol_id,role_name FROM roles WHERE role_status='A' ORDER BY role_name ASC",
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
const getTradingarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT tid,trading_name FROM trending WHERE trading_status='A' ORDER BY trading_name ASC",
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

const getAdminusers = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      //pool.query("SELECT *,case when branch_status = 'A' then 'Active'else 'Inactive' end as status FROM coursebranches ORDER BY courb_id ASC", (error, results) => {
      pool.query(
        "SELECT *,case when admin_status = 'A' then 'Active' else 'Inactive' end as status FROM adminusers  ORDER BY au_id DESC",
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
const getRolelist = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "select r.rol_id, r.role_name,case when r.role_status = 'A' then 'Active' else 'Inactive' end as status, string_agg(module_title,', ') module_name from roles r left join modules md on md.mod_id = any(string_to_array(r.modules_access_ids,',')::int[]) group by rol_id,role_name  ORDER BY rol_id DESC",
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
const getCoursebranchs = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      //pool.query("SELECT *,case when branch_status = 'A' then 'Active'else 'Inactive' end as status FROM coursebranches ORDER BY courb_id ASC", (error, results) => {
      pool.query(
        "SELECT cb.*,co.course_name,case when cb.branch_status = 'A' then 'Active'else 'Inactive' end as status FROM coursebranches as cb inner join courses as co on cb.course_id = co.cour_id ORDER BY courb_id DESC",
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

//get all course type our database
const getCoursetype = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM coursetype ORDER BY course_type_name ASC",
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
//get all college type our database
const getCollegetype = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM collegetype ORDER BY college_type ASC",
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

//create a new course branch record in the databsse
const addCoursebrach = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      course_id,
      branch_name,
      branch_url,
      meta_title,
      meta_description,
      meta_keyword,
      branch_status,
    } = body;
    pool.query(
      "INSERT INTO coursebranches(course_id,branch_name,branch_url,meta_title,meta_description,meta_keyword,branch_status) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING *",
      [
        course_id,
        branch_name,
        branch_url,
        meta_title,
        meta_description,
        meta_keyword,
        branch_status,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new course branch details has been added: ${JSON.stringify(
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
//create a new users record in the databsse
const addNewusers = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      admin_id,
      admin_email,
      admin_password,
      admin_contact,
      modules_access_ids,
      admin_status,
      rol_id,
    } = body;
    pool.query(
      "INSERT INTO adminusers(admin_id,admin_email,admin_password,admin_contact,modules_access_ids,admin_status,rol_id) VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *",
      [
        admin_id,
        admin_email,
        admin_password,
        admin_contact,
        modules_access_ids,
        admin_status,
        rol_id,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new user branch details has been added: ${JSON.stringify(
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
//create add new role record in the databsse
const addRoles = (body) => {
  return new Promise(function (resolve, reject) {
    console.log(body);
    const { role_name, modules_access_ids, role_status } = body;
    pool.query(
      "INSERT INTO roles(role_name,modules_access_ids,role_status) VALUES ($1,$2,$3) RETURNING *",
      [role_name, modules_access_ids, role_status],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A role details has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const addNewcourses = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      course_name,
      course_url,
      cmeta_title,
      cmeta_description,
      cmeta_keyword,
      cstatus,
    } = body;
    pool.query(
      "INSERT INTO courses(course_name,course_url,cmeta_title,cmeta_description,cmeta_keyword,cstatus) VALUES ($1, $2, $3,$4,$5,$6) RETURNING *",
      [
        course_name,
        course_url,
        cmeta_title,
        cmeta_description,
        cmeta_keyword,
        cstatus,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new user branch details has been added: ${JSON.stringify(
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
const addNewfacility = (body) => {
  return new Promise(function (resolve, reject) {
    const { facility_name, facility_status } = body;
    pool.query(
      "INSERT INTO facility(facility_name,facility_status) VALUES ($1, $2) RETURNING *",
      [facility_name, facility_status],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new facility has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const addNewcategories = (body) => {
  console.log("add category", body);
  return new Promise(function (resolve, reject) {
    const {
      category_name,
      category_url,
      category_description,
      category_meta_title,
      category_meta_keyword,
      category_meta_description,
      category_featured,
      category_status,
    } = body;
    pool.query(
      "INSERT INTO categories(category_name,category_url,category_description,category_meta_title,category_meta_keyword,category_meta_description,category_featured,category_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        category_name,
        category_url,
        category_description,
        category_meta_title,
        category_meta_keyword,
        category_meta_description,
        category_featured,
        category_status,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new category details has been added: ${JSON.stringify(
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

//get all facility our database
const getFacility = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT *,case when facility_status = 'A' then 'Active' else 'Inactive' end as status FROM facility ORDER BY facility_id DESC",
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
//get all facility our database
const getCategories = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT * FROM categories ORDER BY category_name ASC",
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
//get all facility our database
const getApprovedby = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT *,case when app_status = 'A' then 'Active' else 'Inactive' end as status FROM approvedby ORDER BY approved_name ASC",
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
  Login,
  getColleges,
  college,
  updateCollege,
  deleteVehicle,
  updateVehicle,
  getCourses,
  getCoursesarr,
  getCoursebranchs,
  addCoursebrach,
  getCategories,
  getCoursetype,
  getCollegetype,
  getFacility,
  getApprovedby,
  getAdminusers,
  getRolelist,
  addNewusers,
  addRoles,
  addNewcourses,
  getModulearr,
  getCollegetypearr,
  getExamlistarr,
  getCategoriesarr,
  getApprovedbyarr,
  getTradingarr,
  getRolesrr,
  addNewcategories,
  addNewfacility,
  editroles,
  editcollege,
  getCoursearr,
};
