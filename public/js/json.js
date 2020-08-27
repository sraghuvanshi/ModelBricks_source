console.log("Hi from JSON.js");

fetch("/json/annotations.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    //getting global publications
    let globalPublications = document.getElementById("globalPublications");
    globalPublications.innerHTML = `
    <h2>Publications</h2>
    <p>${json.BioModel.$.name}</p>
    `;

    //getting gloabal annotations
    var urls = "";
    for (i in json.BioModel.url) {
      urls += json.BioModel.url[i]._;
    }
    console.log(urls);
    let globalAnnotations = document.getElementById("globalAnnotations");
    globalAnnotations.innerHTML = `
      <h2>Annotations</h2>
    <p>${json.BioModel.$.name}</p>
    ${urls}
      `;
  });
