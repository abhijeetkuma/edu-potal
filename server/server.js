const express = require("express");
const multer = require("multer");
const app = express();
const port = 3007;
const colleges_model = require("./model/collegesModel");

/*app.get('/', (req, res) => {
  res.status(200).send('Welcome Node');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}) */

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
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

app.get("/", (req, res) => {
  colleges_model
    .getColleges()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
// File Upload Endpoint
/* app.post("/newsevents", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/

app.post("/login", (req, res) => {
  colleges_model
    .Login(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/addnewcollege", (req, res) => {
  colleges_model
    .college(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/addcoursebranches", (req, res) => {
  colleges_model
    .addCoursebrach(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/addusers", (req, res) => {
  colleges_model
    .addNewusers(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/addroles", (req, res) => {
  colleges_model
    .addRoles(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/addcourse", (req, res) => {
  colleges_model
    .addNewcourses(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/addcategories", (req, res) => {
  colleges_model
    .addNewcategories(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/addfacitly", (req, res) => {
  colleges_model
    .addNewfacility(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/addquestion", (req, res) => {
  colleges_model
    .addQuestion(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/addnewsarticle", (req, res) => {
  colleges_model
    .addNewsarticle(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/deletecollege/:id", (req, res) => {
  colleges_model
    .deleteVehicle(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/editcolleges/:cid", (req, res) => {
  colleges_model
    .editcollege(req.params.cid)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/editquestion/:qid", (req, res) => {
  colleges_model
    .editquestion(req.params.qid)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/editnewsart/:na_id", (req, res) => {
  colleges_model
    .editnewsarticle(req.params.na_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/editroles/:rol_id", (req, res) => {
  colleges_model
    .editroles(req.params.rol_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/getupdatecollege/:cid", (req, res) => {
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
app.put("/getupdatequestion/:qid", (req, res) => {
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
app.put("/getupdatenewsarticles/:na_id", (req, res) => {
  const na_id = req.params.na_id;
  const body = req.body;
  console.log("server na_id", na_id);
  colleges_model
    .updateNewsarticles(na_id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/getvehicledetails/:id", (req, res) => {
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

app.get("/getcourses", (req, res) => {
  colleges_model
    .getCourses()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getcoursesarr", (req, res) => {
  colleges_model
    .getCoursesarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getcategoryarr", (req, res) => {
  colleges_model
    .getCategoriesarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getapprovedbyarr", (req, res) => {
  colleges_model
    .getApprovedbyarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/gettradingarr", (req, res) => {
  colleges_model
    .getTradingarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getcoursearr", (req, res) => {
  colleges_model
    .getCoursearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getrolesarr", (req, res) => {
  colleges_model
    .getRolesrr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getmodulesarr", (req, res) => {
  colleges_model
    .getModulearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getcollegetypearr", (req, res) => {
  colleges_model
    .getCollegetypearr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getexamarr", (req, res) => {
  colleges_model
    .getExamlistarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getfacilityarr", (req, res) => {
  colleges_model
    .getFacilityarr()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getcoursebranchs", (req, res) => {
  colleges_model
    .getCoursebranchs()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getcategories", (req, res) => {
  colleges_model
    .getCategories()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getfacilitys", (req, res) => {
  colleges_model
    .getFacility()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getquestinlisting", (req, res) => {
  colleges_model
    .getQuestionlisting()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getnewsarticleslisting", (req, res) => {
  colleges_model
    .getNewsarticleslisting()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getapprovedby", (req, res) => {
  colleges_model
    .getApprovedby()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getadminuserslist", (req, res) => {
  colleges_model
    .getAdminusers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getroleslist", (req, res) => {
  colleges_model
    .getRolelist()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getroleslist", (req, res) => {
  colleges_model
    .getAdminusers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getcoursetype", (req, res) => {
  colleges_model
    .getCoursetype()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.get("/getcollegetype", (req, res) => {
  colleges_model
    .getCollegetype()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
