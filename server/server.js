const express = require("express");
var cors = require("cors");

const fs = require("fs");
const multer = require("multer");
const app = express();
const config = require("./config/config.js");
const port = process.env.PORT || config.port;
//const port = config.PORT;
const colleges_model = require("./model/collegesModel");
const notification_model = require("./model/notificationModel");
const cms_model = require("./model/Frontend/cmsModel");
const landing_model = require("./model/Frontend/landingModel");
const collegelisting_model = require("./model/Frontend/collegelistingModel");
const exan_model = require("./model/Frontend/examModel");

app.use(cors());

// news & article image upload
var fname, mtype;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //cb(null, "/tmp/my-uploads");
    cb(null, "../client/public/images/newsevents");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    //cb(null, file.fieldname + "-" + uniqueSuffix);
    fname =
      uniqueSuffix + file.originalname.replace(/[$* !@#%^&*()+=<>?/,]/g, "_");
    mtype = file.mimetype;
    cb(null, fname);
  },
});
//const upload = multer({ dest: "./public/images/newsevents" });
const upload = multer({ storage: storage });
// end news & article image upload

// college logo upload
var logofname, logomtype;
const logostorage = multer.diskStorage({
  destination: (req, file, cb) => {
    //cb(null, "/tmp/my-uploads");
    cb(null, "../client/public/colleges/logo");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      "logo_" + Date.now() + "-" + Math.round(Math.random() * 1e9);
    //cb(null, file.fieldname + "-" + uniqueSuffix);
    logofname =
      uniqueSuffix + file.originalname.replace(/[$* !@#%^&*()+=<>?/,]/g, "_");
    logomtype = file.mimetype;
    cb(null, logofname);
  },
});
//const upload = multer({ dest: "./public/images/newsevents" });
const logoupload = multer({ storage: logostorage });
// end college logo upload

// college banner upload
var bannerfname, bannermtype;
const bannerstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    //cb(null, "/tmp/my-uploads");
    cb(null, __dirname + "/public/colleges/banner");
  },
  filename: (req, file, cb) => {
    const img_perfixe = file.fieldname === "logo" ? "logo_" : "banner_";
    const uniqueSuffix =
      img_perfixe + Date.now() + "-" + Math.round(Math.random() * 1e9);
    //cb(null, file.fieldname + "-" + uniqueSuffix);
    bannerfname =
      uniqueSuffix + file.originalname.replace(/[$* !@#%^&*()+=<>?/,]/g, "_");
    bannermtype = file.mimetype;
    cb(null, bannerfname);
  },
});
const bannerupload = multer({ storage: bannerstorage });
// end college banner upload

// college gallery upload
var galleryfname, gallerymtype;
const gallerystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    //cb(null, "/tmp/my-uploads");
    cb(null, __dirname + "/public/colleges/gallery");
  },
  filename: (req, file, cb) => {
    const img_perfixe =
      file.fieldname === "brouchure" ? "brouchure_" : "gallery_";
    const uniqueSuffix =
      img_perfixe + Date.now() + "-" + Math.round(Math.random() * 1e9);
    //cb(null, file.fieldname + "-" + uniqueSuffix);
    galleryfname =
      uniqueSuffix + file.originalname.replace(/[$* !@#%^&*()+=<>?/,]/g, "_");
    gallerymtype = file.mimetype;
    cb(null, galleryfname);
  },
});
const galleryupload = multer({ storage: gallerystorage });
// end college gallery upload

/*app.get('/', (req, res) => {
  res.status(200).send('Welcome Node');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}) */

app.use(express.json());
app.use(function (req, res, next) {
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Accept",
    "application/json, text/plain, */*"
  );
  next();
});

app.get("/api/", (req, res) => {
  colleges_model
    .getColleges()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/api/auth", (req, res) => {
  colleges_model
    .Login(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/addnewcollege", (req, res) => {
  colleges_model
    .college(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/api/addcoursebranches", (req, res) => {
  colleges_model
    .addCoursebrach(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/api/addusers", (req, res) => {
  colleges_model
    .addNewusers(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/addroles", (req, res) => {
  colleges_model
    .addRoles(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/updateroles", (req, res) => {
  colleges_model
    .updateRoles(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/api/addcourse", (req, res) => {
  colleges_model
    .addNewcourses(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/addcategories", (req, res) => {
  colleges_model
    .addNewcategories(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/api/addfacitly", (req, res) => {
  colleges_model
    .addNewfacility(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/addquestion", (req, res) => {
  colleges_model
    .addQuestion(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/addnewcms", (req, res) => {
  colleges_model
    .addCms(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/fetchsubcourese/:course_id", (req, res) => {
  colleges_model
    //.fetchSubcourese(req.body)
    .fetchSubcourese(req.params.course_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcoursesarr", (req, res) => {
  colleges_model
    .getCoursesarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.delete("/api/deletecollege/:id", (req, res) => {
  colleges_model
    .deleteVehicle(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getstatecitylist/:stateid", (req, res) => {
  colleges_model
    .getstatewisecity(req.params.stateid)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/editcolleges/:cid", (req, res) => {
  colleges_model
    .editcollege(req.params.cid)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/editquestion/:qid", (req, res) => {
  colleges_model
    .editquestion(req.params.qid)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/editcms/:cmsid", (req, res) => {
  colleges_model
    .editcms(req.params.cmsid)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/editnewsart/:na_id", (req, res) => {
  colleges_model
    .editnewsarticle(req.params.na_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/editroles/:rol_id", (req, res) => {
  colleges_model
    .editroles(req.params.rol_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post(
  "/api/insertbasicinformation/",
  bannerupload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  (req, res) => {
    const cid = req.body.cid;
    //const body = req.body;
    //console.log("files Property -->", req.files);
    //console.log("files name -->", req.files.logo[0].filename);
    req.body.logo = req.files.logo[0].filename
      ? req.files.logo[0].filename
      : req.body.old_logo;
    req.body.banner = req.files
      ? req.files.banner[0].filename
      : req.body.old_banner;
    //console.log("req.body", req.body);
    //console.log("college id", cid);

    colleges_model
      .insertCollegebasicinformation(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
);
app.post(
  "/api/updatebasicinformation/",
  //logoupload.single("logo"),
  //bannerupload.single("banner"),
  bannerupload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  (req, res) => {
    const cid = req.body.cid;
    //const body = req.body;
    //console.log("files Property -->", req.files);
    //console.log("files name -->", req.files.logo[0].filename);
    req.body.logo =
      req.files.logo && req.files.logo[0].filename
        ? req.files.logo[0].filename
        : req.body.old_logo;
    req.body.banner =
      req.files.banner && req.files.banner[0].filename
        ? req.files.banner[0].filename
        : req.body.old_banner;
    //console.log("req.body", req.body);
    //console.log("college id", cid);

    colleges_model
      .updateCollegebasicinformation(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
);
app.post(
  "/api/updategallery/",
  //logoupload.single("logo"),
  //bannerupload.single("banner"),
  galleryupload.fields([
    { name: "gallery1", maxCount: 1 },
    { name: "gallery2", maxCount: 1 },
    { name: "gallery3", maxCount: 1 },
    { name: "gallery4", maxCount: 1 },
    { name: "gallery5", maxCount: 1 },
    { name: "brouchure", maxCount: 1 },
  ]),
  (req, res) => {
    const cid = req.body.cid;
    //const body = req.body;
    //console.log("files Property -->", req.files);
    //console.log("files name -->", req.files.logo[0].filename);
    req.body.gallery1 =
      req.files.gallery1 && req.files.gallery1[0].filename
        ? req.files.gallery1[0].filename
        : req.body.old_gallery1;
    req.body.gallery2 =
      req.files.gallery2 && req.files.gallery2[0].filename
        ? req.files.gallery2[0].filename
        : req.body.old_gallery2;
    req.body.gallery3 =
      req.files.gallery3 && req.files.gallery3[0].filename
        ? req.files.gallery3[0].filename
        : req.body.old_gallery3;
    req.body.gallery4 =
      req.files.gallery4 && req.files.gallery4[0].filename
        ? req.files.gallery4[0].filename
        : req.body.old_gallery4;
    req.body.gallery5 =
      req.files.gallery5 && req.files.gallery5[0].filename
        ? req.files.gallery5[0].filename
        : req.body.old_gallery5;
    req.body.brouchure =
      req.files.brouchure && req.files.brouchure[0].filename
        ? req.files.brouchure[0].filename
        : req.body.old_brouchure;

    //console.log("req.body", req.body);
    //console.log("college id", cid);

    colleges_model
      .updateGallery(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
);
app.post("/api/updatecontactus", (req, res) => {
  //console.log("contact us details-->", req.body);
  colleges_model
    .updateContactus(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/updatehighlight", (req, res) => {
  //console.log("contact us details-->", req.body);
  colleges_model
    .updateHighlight(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/updatecourses", (req, res) => {
  //console.log("contact us details-->", req.body);
  colleges_model
    .updateCourses(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/updateadmission", (req, res) => {
  //console.log("contact us details-->", req.body);
  colleges_model
    .updateAdmission(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/updateplacement", (req, res) => {
  //console.log("contact us details-->", req.body);
  colleges_model
    .updatePlacement(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/api/updatefaq", (req, res) => {
  //console.log("contact us details-->", req.body);
  colleges_model
    .updateFaq(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/api/getupdatecollege/:cid", (req, res) => {
  const cid = req.params.cid;
  const body = req.body;
  console.log("server cid", cid);
  colleges_model
    .updateCollege(cid, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.put("/api/getupdatequestion/:qid", (req, res) => {
  const qid = req.params.qid;
  const body = req.body;
  console.log("server qid", qid);
  colleges_model
    .updateQuestion(qid, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.put("/api/getupdatecms/:cmsid", (req, res) => {
  const cmsid = req.params.cmsid;
  const body = req.body;
  console.log("server cmsid", cmsid);
  colleges_model
    .updateCMS(cmsid, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
//app.post("/addnewsarticle", (req, res) => {
//app.post("/addnewsarticle", upload.single("image"), (req, res) => {
app.post("/api/addnewsarticle", upload.single("image"), (req, res) => {
  req.body.na_image = req.file ? req.file.filename : "";
  colleges_model
    .addNewsarticle(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//app.put("/getupdatenewsarticles/:na_id", (req, res) => {
app.post("/api/getupdatenewsarticles/", upload.single("image"), (req, res) => {
  const na_id = req.body.na_id;
  //const body = req.body;
  console.log("req.body", req.body);
  console.log("server na_id", na_id);
  req.body.na_image = req.file ? req.file.filename : req.body.old_image;
  colleges_model
    .updateNewsarticles(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/api/getvehicledetails/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  colleges_model
    .updateVehicle(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getcourses", (req, res) => {
  colleges_model
    .getCourses()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcmslisting", (req, res) => {
  colleges_model
    .getCMSListing()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getnotificationlisting", (req, res) => {
  notification_model
    .getNotificationlisting()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/editnotification/:notif_id", (req, res) => {
  notification_model
    .geteditnotification(req.params.notif_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/api/getupdatenotification/:notif_id", (req, res) => {
  const notif_id = req.params.notif_id;
  const body = req.body;
  console.log("server notif_id", notif_id);
  notification_model
    .updateNotification(notif_id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getcoursesarr", (req, res) => {
  colleges_model
    .getCoursesarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getsubcoursestypearr", (req, res) => {
  colleges_model
    .getSubcoursestypearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getcategoryarr", (req, res) => {
  colleges_model
    .getCategoriesarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getapprovedbyarr", (req, res) => {
  colleges_model
    .getApprovedbyarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/gettradingarr", (req, res) => {
  colleges_model
    .getTradingarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcoursearr", (req, res) => {
  colleges_model
    .getCoursearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getsubcoursearr", (req, res) => {
  colleges_model
    .getSubcoursearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getrolesarr", (req, res) => {
  colleges_model
    .getRolesrr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getmodulesarr", (req, res) => {
  colleges_model
    .getModulearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcollegetypearr", (req, res) => {
  colleges_model
    .getCollegetypearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getexamarr", (req, res) => {
  colleges_model
    .getExamlistarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getfeetypearr", (req, res) => {
  colleges_model
    .getFeetypearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getfacilityarr", (req, res) => {
  colleges_model
    .getFacilityarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcountryarr", (req, res) => {
  colleges_model
    .getCountryarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getstatearr", (req, res) => {
  colleges_model
    .getStatearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcityarr", (req, res) => {
  colleges_model
    .getCityarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getcoursebranchs", (req, res) => {
  colleges_model
    .getCoursebranchs()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getcategories", (req, res) => {
  colleges_model
    .getCategories()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getfacilitys", (req, res) => {
  colleges_model
    .getFacility()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getquestinlisting", (req, res) => {
  colleges_model
    .getQuestionlisting()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getnewsarticleslisting", (req, res) => {
  colleges_model
    .getNewsarticleslisting()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/getapprovedby", (req, res) => {
  colleges_model
    .getApprovedby()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getadminuserslist", (req, res) => {
  colleges_model
    .getAdminusers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getroleslist", (req, res) => {
  colleges_model
    .getRolelist()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getroleslist", (req, res) => {
  colleges_model
    .getAdminusers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcoursetype", (req, res) => {
  colleges_model
    .getCoursetype()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/getcollegetype", (req, res) => {
  colleges_model
    .getCollegetype()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
//front end apis
//landing page apis
app.get("/api/featuredcolleges/", (req, res) => {
  landing_model
    .featuredColleges()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/futuregoal/", (req, res) => {
  landing_model
    .goal()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/topnotifications/", (req, res) => {
  landing_model
    .topNotification()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/toppopulercolleges/", (req, res) => {
  landing_model
    .topPopularcolleges()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/landingexams/", (req, res) => {
  landing_model
    .exams()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/landingnewsandupdates/", (req, res) => {
  landing_model
    .newsandupdates()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/studybycities/", (req, res) => {
  landing_model
    .studybycities()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
//end landing page apis
app.get("/api/cmsdetails/:cms_url", (req, res) => {
  cms_model
    .cmsdetails(req.params.cms_url)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/collegelisting/", (req, res) => {
  collegelisting_model
    .listing()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/api/examlisting/", (req, res) => {
  exan_model
    .examlisting()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/examdetail/:na_url", (req, res) => {
  exan_model
    .examdetail(req.params.na_url)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
//end front end apis
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
