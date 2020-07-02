console.log("Hi from JSON.js");
// fetch(
//   "https://vcellapi-beta.cam.uchc.edu:8080/biomodel?bmName=&bmId=&category=all&owner=ModelBrick&savedLow=&savedHigh=&startRow=1&maxRows=10&orderBy=date_desc"
// ).then((res) => console.log(res));
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url =
  "https://vcellapi-beta.cam.uchc.edu:8080/biomodel?bmName=&bmId=&category=all&owner=ModelBrick&savedLow=&savedHigh=&startRow=1&maxRows=10&orderBy=date_desc"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
  .then((response) => response.text())
  .then((contents) => {
    console.log(contents);
  })
  .catch(() =>
    console.log("Can’t access " + url + " response. Blocked by browser?")
  );
