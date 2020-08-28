console.log("Hi from JSON.js");

fetch("/json/annotations.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    // getting global publications and UID's
    for (i in json.BioModel.url) {
      var link = json.BioModel.url[i]._;
      var name = json.BioModel.url[i].$.name;

      // global publications
      let globalPublications = document.getElementById("globalPublications");

      if (name.includes("BioModel")) {
        // chebi
        if (link.includes("chebi")) {
          if (link.includes("%")) {
            var indexToSlice = link.indexOf("%") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            globalPublications.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          <br>
          ${link} 
          <br>
          ${name}
          </p>
          `;
          } else {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            globalPublications.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          <br>
          ${link} 
          <br>
          ${name}
          </p>

          `;
          }
        }
        //mamo
        if (link.includes("mamo")) {
          var indexToSlice = link.lastIndexOf("_") + 1;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          <br>
          ${link} 
          <br>
          ${name}
          </p>
          `;
        }
        //biomodels.db
        if (link.includes("biomodels")) {
          var indexToSlice = link.lastIndexOf("/") + 1;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          <br>
          ${link} 
          <br>
          ${name}
          </p>
          `;
        }
        //taxonomy
        if (link.includes("taxonomy")) {
          var indexToSlice = link.lastIndexOf("/") + 1;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>
            <br>
          ${link} 
          <br>
          ${name}
            </p>
            `;
        }
        //pubmed
        if (link.includes("pubmed")) {
          var indexToSlice = link.lastIndexOf("/") + 1;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>
            <br>
          ${link} 
          <br>
          ${name}
            </p>
            `;
        }
        //uniprot
        if (link.includes("uniprot")) {
          var indexToSlice = link.length - 6;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>
            <br>
          ${link} 
          <br>
          ${name}
            </p>
            `;
        }
        //Go
        if (link.includes("go")) {
          var indexToSlice = link.lastIndexOf(":") + 1;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>
            <br>
          ${link} 
          <br>
          ${name}
            </p>
            `;
        }
        //Reactome
        if (link.includes("reactome")) {
          var indexToSlice = link.lastIndexOf(":") + 1;
          var length = link.length;
          var linkId = link.slice(indexToSlice, length);
          globalPublications.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>
            <br>
          ${link} 
          <br>
          ${name}
            </p>
            `;
        }
        //DOI
        if (link.includes("doi")) {
          globalPublications.innerHTML += `
            <p> <a href="${link}">DOI</a>
            <br>
          ${link} 
          <br>
          ${name}
            </p>
            `;
        }
      }
    }

    // getting global Annotation
    for (i in json.BioModel.text) {
      var text = json.BioModel.text[i]._;
      var name = json.BioModel.text[i].$.name;

      // global annotations
      let globalAnnotations = document.getElementById("globalAnnotations");
      if (name.includes("BioModel")) {
        globalAnnotations.innerHTML += `
            <p>${text}</p>
            `;
      }
    }
  });
