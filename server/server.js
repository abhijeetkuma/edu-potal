import express, { json } from "express";
const app = express();
const port = 3007;
import {
  getColleges,
  addColleges,
  deleteCollege,
  updateVehicle,
  getVehiclesnumbers,
} from "./model/collegesModel.js";

/*app.get('/', (req, res) => {
  res.status(200).send('Welcome Node');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}) */

app.use(json());
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
  getColleges()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/addnewcollege", (req, res) => {
  addColleges(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/deletecollege/:id", (req, res) => {
  deleteCollege(req.params.id)
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
  updateVehicle(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/vehiclenumberlist", (req, res) => {
  getVehiclesnumbers()
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
