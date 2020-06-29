var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "ModelBricks - Home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "ModelBricks - About",
  });
});

router.get("/motivation", (req, res) => {
  res.render("motivation", {
    title: "ModelBricks - Motivation",
  });
});

router.get("/curatedList", (req, res) => {
  res.render("curatedList", {
    title: "ModelBricks - Curated List",
  });
});

router.get("/egfr", (req, res) => {
  res.render("egfr", {
    title: "ModelBricks - EGFR",
  });
});

router.get("/tools", (req, res) => {
  res.render("tools", {
    title: "ModelBricks - Tools",
  });
});

router.get("/blog", (req, res) => {
  res.render("blog", {
    title: "ModelBricks - Blog",
  });
});

module.exports = router;
