const fs = require("fs");
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const xml2js = require("xml2js");
const util = require("util");
const PORT = process.env.PORT || 4002;

var indexRouter = require("./routes/index");

app.use(express.json());

// view engine setup
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");

//XML parser
// var parser = new xml2js.Parser();
// fs.readFile("Biomodel_172076998.xml", (err, data) => {
//   parser.parseString(data, (err, result) => {
//     // console.dir(util.inspect(result, false, null, true));
//     // console.log("Read finished!");
//     let data = JSON.stringify(result);
//     fs.writeFileSync("/public/js/new.json", data);
//     console.log("file written");
//   });
// });

app.get("/data", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile("Biomodel_147699816.xml", (err, data) => {
    parser.parseString(data, (err, result) => {
      const data = result;
      res.render("data", {
        title: "ModelBricks - JSON DATA",
        data,
      });
    });
  });
});

app.get("/json", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile("Biomodel_147699816.xml", (err, data) => {
    parser.parseString(data, (err, result) => {
      res.send(result);
    });
  });
});

// single model page

app.get("/curatedList/model", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile("Biomodel_147699816.xml", (err, data) => {
    parser.parseString(data, (err, result) => {
      const data = result;
      res.render("model", {
        title: "ModelBricks - Model Page",
        data,
      });
    });
  });
});

app.get("/curatedList/model/:id", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile(
    "./biomodels/Biomodel_" + req.params.id + ".vcml",
    (err, data) => {
      parser.parseString(data, (err, result) => {
        const data = result;
        res.render("model", {
          title: "ModelBricks - Model Page",
          data,
        });
      });
    }
  );
});

// fetching model list

//static pages
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.use("/", indexRouter);

// Server Port
app.listen(PORT, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
