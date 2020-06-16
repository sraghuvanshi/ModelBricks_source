const fs = require("fs");
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const xml2js = require("xml2js");
const util = require("util");
const port = process.env.port || 4000;

// module.exports = xml2js;

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
//     console.log("Read finished!");
//   });
// });

app.get("/data", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile("Biomodel_172076998.xml", (err, data) => {
    parser.parseString(data, (err, result) => {
      const data = JSON.stringify(result);
      res.render("data", {
        title: "ModelBricks - JSON DATA",
        data,
      });
    });
  });
});

app.get("/json", (req, res) => {
  var parser = new xml2js.Parser();
  fs.readFile("Biomodel_172076998.xml", (err, data) => {
    parser.parseString(data, (err, result) => {
      res.send(result);
    });
  });
});

//static pages
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.get("/", (req, res) => {
  res.render("index", {
    title: "ModelBricks - Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "ModelBricks - About",
  });
});

app.get("/motivation", (req, res) => {
  res.render("motivation", {
    title: "ModelBricks - Motivation",
  });
});

app.get("/curatedList", (req, res) => {
  res.render("curatedList", {
    title: "ModelBricks - Curated List",
  });
});

app.get("/egfr", (req, res) => {
  res.render("egfr", {
    title: "ModelBricks - EGFR",
  });
});

app.get("/tools", (req, res) => {
  res.render("tools", {
    title: "ModelBricks - Tools",
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    title: "ModelBricks - Blog",
  });
});

app.get("/model", (req, res) => {
  res.render("model", {
    title: "ModelBricks - Model page",
  });
});

// Server Port
app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}...`);
});
