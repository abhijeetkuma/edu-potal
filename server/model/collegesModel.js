const { query } = require("express");
const config = require("./../config/config.js");

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

//get all colleges our database
const getColleges = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "select * from colleges order by cid desc",
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
const Login = async (body) => {
  try {
    return await new Promise(function (resolve, reject) {
      const { admin_email, admin_password } = body;
      pool.query(
        "select au_id,admin_id,admin_email,admin_contact from adminusers where admin_status='A' and admin_email=$1 and admin_password=$2",
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

/* //create a new merchant record in the databsse
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
}; */
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
const getstatewisecity = (stat_id) => {
  //const rol_id = rol_id;
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT cit_id,city_name FROM city_list WHERE stat_id = $1",
      [stat_id],
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

const fetchSubcourese = async (course_id) => {
  try {
    return await new Promise(function (resolve, reject) {
      //const { course_id } = body;
      pool.query(
        "SELECT courb_id,branch_name FROM coursebranches where course_id=$1",
        //"SELECT courb_id,branch_name FROM coursebranches where course_id in($1)",
        //"SELECT courb_id,branch_name FROM coursebranches where course_id = ANY($1::int[])",
        [course_id],
        (error, results) => {
          //console.log("results", body);
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
/* const getCoursesarrs = async () => {
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
}; */

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
const editquestion = (cid) => {
  //const rol_id = rol_id;
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM questions WHERE qid = $1",
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
const editnewsarticle = (na_id) => {
  //const rol_id = rol_id;
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM newsarticles WHERE na_id = $1",
      [na_id],
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
const insertCollegebasicinformation = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      college_name,
      college_url,
      tag_line,
      usp_remark,
      found_year,
      intake,
      hostel_available,
      college_descripton,
      facultyprofile,
      ctype,
      trading,
      approvedby,
      facilities,
      categories,
      exams,
      meta_title,
      meta_keyword,
      meta_description,
      logo,
      banner,
    } = body;
    pool.query(
      "INSERT INTO colleges(college_name,college_url,tag_line,usp_remark,found_year,intake,hostel_available,college_descripton,facultyprofile,ctype,trading,approvedby,facilities,categories,exams,meta_title,meta_keyword,meta_description,logo,banner) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
      [
        college_name,
        college_url,
        tag_line,
        usp_remark,
        found_year,
        intake,
        hostel_available,
        college_descripton,
        facultyprofile,
        ctype,
        trading,
        approvedby,
        facilities,
        categories,
        exams,
        meta_title,
        meta_keyword,
        meta_description,
        logo,
        banner,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          //resolve(`College basic insert: ${JSON.stringify(results.rows[0])}`);
          resolve(JSON.stringify(results.rows[0]));
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateCollegebasicinformation = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      cid,
      college_name,
      college_url,
      tag_line,
      usp_remark,
      found_year,
      intake,
      hostel_available,
      college_descripton,
      facultyprofile,
      ctype,
      trading,
      approvedby,
      facilities,
      categories,
      exams,
      meta_title,
      meta_keyword,
      meta_description,
      logo,
      banner,
    } = body;
    pool.query(
      "UPDATE colleges SET college_name = $2, college_url = $3,tag_line=$4,usp_remark=$5,found_year=$6,intake=$7,hostel_available=$8,college_descripton=$9,facultyprofile=$10,ctype=$11,trading=$12,approvedby=$13,facilities=$14,categories=$15,exams=$16,meta_title=$17,meta_keyword=$18,meta_description=$19,logo=$20,banner=$21 WHERE cid = $1 RETURNING *",
      [
        cid,
        college_name,
        college_url,
        tag_line,
        usp_remark,
        found_year,
        intake,
        hostel_available,
        college_descripton,
        facultyprofile,
        ctype,
        trading,
        approvedby,
        facilities,
        categories,
        exams,
        meta_title,
        meta_keyword,
        meta_description,
        logo,
        banner,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`College basic updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateGallery = (body) => {
  return new Promise(function (resolve, reject) {
    const {
      cid,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      brouchure,
      youtube,
    } = body;
    pool.query(
      "UPDATE colleges SET gallery1 = $2, gallery2 = $3,gallery3=$4,gallery4=$5,gallery5=$6,brouchure=$7,youtube=$8 WHERE cid = $1 RETURNING *",
      [
        cid,
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        brouchure,
        youtube,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `College gallery updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateContactus = (body) => {
  //console.log("contact us body-->", body);
  return new Promise(function (resolve, reject) {
    const {
      cid,
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
      "UPDATE colleges SET address = $2, address2 = $3,landmark=$4,pincode=$5,country=$6,state=$7,city=$8,contactno=$9,faxno=$10,email=$11,website=$12 WHERE cid = $1 RETURNING *",
      [
        cid,
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
            `College contact updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateHighlight = (body) => {
  console.log("Highlight body-->", body);
  return new Promise(function (resolve, reject) {
    const { cid, display_type, highlights } = body;
    pool.query(
      "UPDATE colleges SET display_type = $2, highlights = $3 WHERE cid = $1 RETURNING *",
      [cid, display_type, highlights],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `College admission updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateCourses = (body) => {
  console.log("Highlight body-->", body);
  return new Promise(function (resolve, reject) {
    const { cid, courses, sub_course_details } = body;
    pool.query(
      "UPDATE colleges SET courses=$2, sub_course_details = $3 WHERE cid = $1 RETURNING *",
      [cid, courses, sub_course_details],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `College admission updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateAdmission = (body) => {
  //console.log("contact us body-->", body);
  return new Promise(function (resolve, reject) {
    const { cid, adminssiondetails, scholarshipoffer } = body;
    pool.query(
      "UPDATE colleges SET adminssiondetails = $2, scholarshipoffer = $3 WHERE cid = $1 RETURNING *",
      [cid, adminssiondetails, scholarshipoffer],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `College admission updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updatePlacement = (body) => {
  //console.log("Placement body-->", body);
  return new Promise(function (resolve, reject) {
    const {
      cid,
      placement_overview,
      totalplacementratio,
      averageplacementrecord,
      higestplacementrecord,
      lowestplacementrecord,
      toprecruiters,
      toprecuitingsectors,
      topprofile,
    } = body;
    pool.query(
      "UPDATE colleges SET placement_overview = $2, totalplacementratio = $3,averageplacementrecord=$4,higestplacementrecord=$5,lowestplacementrecord=$6,toprecruiters=$7,toprecuitingsectors=$8,topprofile=$9 WHERE cid = $1 RETURNING *",
      [
        cid,
        placement_overview,
        totalplacementratio,
        averageplacementrecord,
        higestplacementrecord,
        lowestplacementrecord,
        toprecruiters,
        toprecuitingsectors,
        topprofile,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `College admission updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const updateFaq = (body) => {
  //console.log("Placement body-->", body);
  return new Promise(function (resolve, reject) {
    const { cid, faq } = body;
    pool.query(
      "UPDATE colleges SET faq = $2 WHERE cid = $1 RETURNING *",
      [cid, faq],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `College admission updated: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
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
      facultyprofile,
      faq,
      facilities,
      totalplacementratio,
      averageplacementrecord,
      higestplacementrecord,
      lowestplacementrecord,
      toprecruiters,
      toprecuitingsectors,
      topprofile,
    } = body;
    pool.query(
      "UPDATE colleges SET college_name = $2, college_url = $3,tag_line=$4,usp_remark=$5,found_year=$6,intake=$7,college_descripton=$8,meta_title=$9,meta_keyword=$10,meta_description=$11,display_type=$12,address=$13,address2=$14,landmark=$15,pincode=$16,country=$17,state=$18,city=$19,contactno=$20,faxno=$21,email=$22,website=$23,ctype=$24,trading=$25,approvedby=$26,categories=$27,courses=$28,hostel_available=$29,adminssiondetails=$30 ,scholarshipoffer=$31,facultyprofile=$32,faq=$33,facilities=$34,totalplacementratio=$35,averageplacementrecord=$36,higestplacementrecord=$37,lowestplacementrecord=$38,toprecruiters=$39,toprecuitingsectors=$40,topprofile=$41, WHERE cid = $1 RETURNING *",
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
        facultyprofile,
        faq,
        facilities,
        totalplacementratio,
        averageplacementrecord,
        higestplacementrecord,
        lowestplacementrecord,
        toprecruiters,
        toprecuitingsectors,
        topprofile,
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
const updateQuestion = (qid, body) => {
  return new Promise(function (resolve, reject) {
    const { qid, question, answer, qstatus, trading, catgories } = body;
    pool.query(
      "UPDATE questions SET question = $2,answer=$3, qstatus=$4,trading=$5,catgories=$6 WHERE qid = $1 RETURNING *",
      [qid, question, answer, qstatus, trading, catgories],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Question updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
const addNewsarticle = (body) => {
  return new Promise(function (resolve, reject) {
    console.log("body", body);
    const {
      na_type,
      na_title,
      na_url,
      na_brief_description,
      na_description,
      na_metatitle,
      na_metadescription,
      na_metakeyword,
      na_status,
      added_by,
      na_trends,
      na_categories,
      na_image,
    } = body;
    pool.query(
      "INSERT INTO newsarticles(na_type,na_title,na_url,na_brief_description,na_description,na_metatitle,na_metadescription,na_metakeyword,na_status,added_by,na_trends,na_categories,na_image) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
      [
        na_type,
        na_title,
        na_url,
        na_brief_description,
        na_description,
        na_metatitle,
        na_metadescription,
        na_metakeyword,
        na_status,
        added_by,
        na_trends,
        na_categories,
        na_image,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new record has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
//const updateNewsarticles = (na_id, body) => {
const updateNewsarticles = (body) => {
  console.log("body", body);
  return new Promise(function (resolve, reject) {
    const {
      na_id,
      na_type,
      na_title,
      na_url,
      na_brief_description,
      na_description,
      na_metatitle,
      na_metadescription,
      na_metakeyword,
      na_status,
      na_trends,
      na_categories,
      added_by,
      na_image,
    } = body;
    pool.query(
      "UPDATE newsarticles SET na_type = $2,na_title=$3, na_url=$4, na_brief_description=$5,na_description=$6,na_metatitle=$7,na_metadescription=$8,na_metakeyword=$9,na_status=$10,na_trends=$11,na_categories=$12,added_by=$13,na_image=$14 WHERE na_id = $1 RETURNING *",
      [
        na_id,
        na_type,
        na_title,
        na_url,
        na_brief_description,
        na_description,
        na_metatitle,
        na_metadescription,
        na_metakeyword,
        na_status,
        na_trends,
        na_categories,
        added_by,
        na_image,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Question updated: ${JSON.stringify(results.rows[0])}`);
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
//get country array
const getCountryarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT cout_id,country_name FROM countrylist ORDER BY country_name ASC",
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
const getStatearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT sta_id,state_name FROM state_list ORDER BY state_name ASC",
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
const getCityarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT cit_id,city_name FROM city_list ORDER BY city_name ASC",
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
//get all sud course array our database
const getSubcoursestypearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT coursetype_id,course_type_name FROM coursetype ORDER BY course_type_name ASC",
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
const getFeetypearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT feetype_id,fee_type FROM fee_type ORDER BY fee_type ASC",
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
const getSubcoursearr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT courb_id,branch_name FROM coursebranches ORDER BY branch_name ASC",
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
const getFacilityarr = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT facility_id,facility_name FROM facility WHERE facility_status='A' ORDER BY facility_name ASC",
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
const updateRoles = (body) => {
  return new Promise(function (resolve, reject) {
    console.log(body);
    const { rol_id, role_name, modules_access_ids, role_status } = body;
    pool.query(
      "UPDATE roles SET role_name=$2,modules_access_ids=$3,role_status=$4 WHERE rol_id=$1 RETURNING *",
      [rol_id, role_name, modules_access_ids, role_status],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A role details has been updated: ${JSON.stringify(
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
const addQuestion = (body) => {
  return new Promise(function (resolve, reject) {
    const { question, answer, qstatus, trading, catgories } = body;
    pool.query(
      "INSERT INTO questions(question,answer, qstatus,trading,catgories) VALUES ($1, $2,$3,$4,$5) RETURNING *",
      [question, answer, qstatus, trading, catgories],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new question has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

const addCms = (body) => {
  console.log("body->", body);
  return new Promise(function (resolve, reject) {
    const {
      cms_title,
      cms_url,
      cms_description,
      cms_meta_title,
      cms_meta_description,
      cms_meta_keyword,
    } = body;
    pool.query(
      "INSERT INTO cms(cms_title,cms_url,cms_description,cms_meta_title,cms_meta_description,cms_meta_keyword) VALUES ( $2,$3,$4,$5,$5,$6) RETURNING *",
      [
        cms_title,
        cms_url,
        cms_description,
        cms_meta_title,
        cms_meta_description,
        cms_meta_keyword,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new question has been added: ${JSON.stringify(results.rows[0])}`
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
//get all question and answer our database
const getQuestionlisting = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT *,case when qstatus = 'A' then 'Active' else 'Inactive' end as status FROM questions ORDER BY qid DESC",
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
//get all news and articles our database
const getNewsarticleslisting = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(
        "SELECT *,case when na_type = 'a' then 'Article' when na_type = 'n' then 'News' else 'Exam' end as type,case when na_status = 'A' then 'Active' else 'Inactive' end as status FROM newsarticles ORDER BY na_id DESC",
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
const getCMSListing = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM cms ORDER BY cmsid DESC", (error, results) => {
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
module.exports = {
  Login,
  getColleges,
  //college,
  updateCollege,
  insertCollegebasicinformation,
  updateCollegebasicinformation,
  updateGallery,
  updateContactus,
  updateHighlight,
  updateCourses,
  updateAdmission,
  updatePlacement,
  updateFaq,
  updateQuestion,
  updateNewsarticles,
  deleteVehicle,
  updateVehicle,
  getCourses,
  getCoursesarr,
  getSubcoursestypearr,
  getCountryarr,
  getStatearr,
  getCityarr,
  getCoursebranchs,
  addCoursebrach,
  getCategories,
  getCoursetype,
  getCollegetype,
  getFacility,
  getQuestionlisting,
  getNewsarticleslisting,
  getApprovedby,
  getAdminusers,
  getRolelist,
  addNewusers,
  addRoles,
  updateRoles,
  addNewcourses,
  getModulearr,
  getCollegetypearr,
  getExamlistarr,
  getFeetypearr,
  getCategoriesarr,
  getApprovedbyarr,
  getTradingarr,
  getRolesrr,
  addNewcategories,
  addNewfacility,
  addQuestion,
  addNewsarticle,
  editroles,
  editcollege,
  editquestion,
  editnewsarticle,
  getCoursearr,
  getSubcoursearr,
  getFacilityarr,
  fetchSubcourese,
  getstatewisecity,
  getCMSListing,
  addCms,
};
