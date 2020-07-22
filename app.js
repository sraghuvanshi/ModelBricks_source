const fs = require("fs");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const path = require("path");
const xml2js = require("xml2js");
const util = require("util");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 4002;

var indexRouter = require("./routes/index");

app.use(express.json());

// view engine setup
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main",

  // create custom helper
  helpers: {
    trimString: function (passedString) {
      var indexToSlice = passedString.indexOf("::") + 2;
      var length = passedString.length;
      var theString = passedString.slice(indexToSlice, length);
      return theString;
    },
    toDate: function (timeStamp) {
      var theDate = new Date(timeStamp);
      dateString = theDate.toGMTString();
      date = dateString.slice(5, 16);
      return dateString;
    },
  },
});

app.engine("hbs", hbs.engine);
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
  fs.readFile("./biomodels/Biomodel_176197427.vcml", (err, data) => {
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
  fs.readFile("./biomodels/Biomodel_176197427.vcml", (err, data) => {
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

// Fetching Curated List of models from API
app.get("/listData", async (req, res) => {
  // const api_url =
  //   "https://vcellapi-beta.cam.uchc.edu:8080/biomodel?bmName=&bmId=&category=all&owner=ModelBrick&savedLow=&savedHigh=&startRow=1&maxRows=10&orderBy=date_desc";
  const api_url =
    "https://vcellapi-beta.cam.uchc.edu:8080/publication?submitLow=&submitHigh=&startRow=1&maxRows=10&hasData=all&waiting=on&queued=on&dispatched=on&running=on";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get("/curatedList", async (req, res) => {
  var bmName = req.query.bmName;
  var bmId = req.query.bmId;
  var owner = req.query.owner;
  var category = req.query.category;
  var orderBy = req.query.orderBy;

  const api_url =
    "https://vcellapi-beta.cam.uchc.edu:8080/biomodel?bmName=" +
    bmName +
    "&bmId=" +
    bmId +
    "&category=" +
    category +
    "&owner=" +
    owner +
    "&savedLow=&savedHigh=&startRow=1&maxRows=10&orderBy=date_desc";

  // const api_url =
  //   "https://vcellapi-beta.cam.uchc.edu:8080/biomodel?bmName=&bmId=&category=all&owner=ModelBrick&savedLow=&savedHigh=&startRow=1&maxRows=10&orderBy=date_desc";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.render("curatedList", {
    title: "ModelBricks - Curated List",
    json,
    bmId,
    bmName,
    owner,
    category,
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

app.get("/curatedList/printModel/:id", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile(
    "./biomodels/Biomodel_" + req.params.id + ".vcml",
    (err, data) => {
      parser.parseString(data, (err, result) => {
        const data = result;
        // generating static html pages in ./public/html
        var template = handlebars.compile(
          fs.readFileSync("./temp/modelTemplate.html", "utf8")
        );
        var generated = template({ data: data });
        fs.writeFileSync(
          "./public/html/" + "model_" + req.params.id + ".html",
          generated,
          "utf-8"
        );
        res.render("printModel", {
          title: "ModelBricks - Model Print Page",
          data,
        });
      });
    }
  );
});

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
