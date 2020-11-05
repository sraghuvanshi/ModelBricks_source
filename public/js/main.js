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
        if (globalPublications != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              globalPublications.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              globalPublications.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
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

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            globalPublications.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }

      // getting Reactions UID's

      if (name.includes("ReactionStep")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);
        console.log("reaction:" + elementName);

        let annotationDiv = document.getElementById(
          `reactionUID-${elementName}`
        );

        if (annotationDiv != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>

          `;
            }
          }
          //mamo
          if (link.includes("mamo")) {
            var indexToSlice = link.lastIndexOf("_") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          </p>
          `;
          }
          //biomodels.db
          if (link.includes("biomodels")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          </p>
          `;
          }
          //taxonomy
          if (link.includes("taxonomy")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>

            </p>
            `;
          }
          //pubmed
          if (link.includes("pubmed")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>

            </p>
            `;
          }
          //uniprot
          if (link.includes("uniprot")) {
            var indexToSlice = link.length - 6;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>

            </p>
            `;
          }
          //Go
          if (link.includes("go")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>

            </p>
            `;
          }
          //Reactome
          if (link.includes("reactome")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            annotationDiv.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }

      // getting structure UID's

      if (name.includes("Structure")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);
        console.log("structure:" + elementName);

        let annotationDiv = document.getElementById(
          `structureUID-${elementName}`
        );
        if (annotationDiv != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>

          `;
            }
          }
          //mamo
          if (link.includes("mamo")) {
            var indexToSlice = link.lastIndexOf("_") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          </p>
          `;
          }
          //biomodels.db
          if (link.includes("biomodels")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          </p>
          `;
          }
          //taxonomy
          if (link.includes("taxonomy")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>

            </p>
            `;
          }
          //pubmed
          if (link.includes("pubmed")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>

            </p>
            `;
          }
          //uniprot
          if (link.includes("uniprot")) {
            var indexToSlice = link.length - 6;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>

            </p>
            `;
          }
          //Go
          if (link.includes("go")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>

            </p>
            `;
          }
          //Reactome
          if (link.includes("reactome")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            annotationDiv.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }

      // getting molecular UID's

      if (name.includes("MolecularType")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);
        console.log("Molecule:" + elementName);

        let annotationDiv = document.getElementById(
          `moleculesUID-${elementName}`
        );
        if (annotationDiv != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>

          `;
            }
          }
          //mamo
          if (link.includes("mamo")) {
            var indexToSlice = link.lastIndexOf("_") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          </p>
          `;
          }
          //biomodels.db
          if (link.includes("biomodels")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          </p>
          `;
          }
          //taxonomy
          if (link.includes("taxonomy")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>

            </p>
            `;
          }
          //pubmed
          if (link.includes("pubmed")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>

            </p>
            `;
          }
          //uniprot
          if (link.includes("uniprot")) {
            var indexToSlice = link.length - 6;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>

            </p>
            `;
          }
          //Go
          if (link.includes("go")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>

            </p>
            `;
          }
          //Reactome
          if (link.includes("reactome")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            annotationDiv.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }
      // getting Species UID's

      if (name.includes("Species")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);
        console.log("Species:" + elementName);

        let annotationDiv = document.getElementById(
          `speciesUID-${elementName}`
        );
        if (annotationDiv != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>

          `;
            }
          }
          //mamo
          if (link.includes("mamo")) {
            var indexToSlice = link.lastIndexOf("_") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          </p>
          `;
          }
          //biomodels.db
          if (link.includes("biomodels")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          </p>
          `;
          }
          //taxonomy
          if (link.includes("taxonomy")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>

            </p>
            `;
          }
          //pubmed
          if (link.includes("pubmed")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>

            </p>
            `;
          }
          //uniprot
          if (link.includes("uniprot")) {
            var indexToSlice = link.length - 6;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>

            </p>
            `;
          }
          //Go
          if (link.includes("go")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>

            </p>
            `;
          }
          //Reactome
          if (link.includes("reactome")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            annotationDiv.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }

      // getting Observables UID's

      if (name.includes("RbmObservable")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);
        console.log("Observale:" + elementName);

        let annotationDiv = document.getElementById(
          `observableUID-${elementName}`
        );
        if (annotationDiv != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>

          `;
            }
          }
          //mamo
          if (link.includes("mamo")) {
            var indexToSlice = link.lastIndexOf("_") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          </p>
          `;
          }
          //biomodels.db
          if (link.includes("biomodels")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          </p>
          `;
          }
          //taxonomy
          if (link.includes("taxonomy")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>

            </p>
            `;
          }
          //pubmed
          if (link.includes("pubmed")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>

            </p>
            `;
          }
          //uniprot
          if (link.includes("uniprot")) {
            var indexToSlice = link.length - 6;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>

            </p>
            `;
          }
          //Go
          if (link.includes("go")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>

            </p>
            `;
          }
          //Reactome
          if (link.includes("reactome")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            annotationDiv.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }

      // getting Parameters UID's

      if (name.includes("ModelParameter")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);
        console.log("Parameter:" + elementName);

        let annotationDiv = document.getElementById(
          `parameterUID-${elementName}`
        );
        if (annotationDiv != null) {
          // chebi
          if (link.includes("chebi")) {
            if (link.includes("%")) {
              var indexToSlice = link.indexOf("%") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>
          `;
            } else {
              var indexToSlice = link.lastIndexOf(":") + 1;
              var length = link.length;
              var linkId = link.slice(indexToSlice, length);
              annotationDiv.innerHTML += `
          <p> <a href="${link}">Chebi : ${linkId}</a>
          </p>

          `;
            }
          }
          //mamo
          if (link.includes("mamo")) {
            var indexToSlice = link.lastIndexOf("_") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">Mamo : ${linkId}</a>
          </p>
          `;
          }
          //biomodels.db
          if (link.includes("biomodels")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
          <p> <a href="${link}">BioModels : ${linkId}</a>
          </p>
          `;
          }
          //taxonomy
          if (link.includes("taxonomy")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Taxonomy : ${linkId}</a>

            </p>
            `;
          }
          //pubmed
          if (link.includes("pubmed")) {
            var indexToSlice = link.lastIndexOf("/") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Pubmed : ${linkId}</a>

            </p>
            `;
          }
          //uniprot
          if (link.includes("uniprot")) {
            var indexToSlice = link.length - 6;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Uniprot : ${linkId}</a>

            </p>
            `;
          }
          //Go
          if (link.includes("go")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Go : ${linkId}</a>

            </p>
            `;
          }
          //Reactome
          if (link.includes("reactome")) {
            var indexToSlice = link.lastIndexOf(":") + 1;
            var length = link.length;
            var linkId = link.slice(indexToSlice, length);
            annotationDiv.innerHTML += `
            <p> <a href="${link}">Reactome : ${linkId}</a>

            </p>
            `;
          }
          //DOI
          if (link.includes("doi")) {
            annotationDiv.innerHTML += `
            <p> <a href="${link}">DOI</a>

            </p>
            `;
          }
        }
      }
    }

    // UID COMPLETED ---------------------->

    // getting Text Annotation

    for (i in json.BioModel.text) {
      var text = json.BioModel.text[i]._;
      var name = json.BioModel.text[i].$.name;

      // global annotations
      let globalAnnotations = document.getElementById("globalAnnotations");
      if (name.includes("BioModel")) {
        if (globalAnnotations != null) {
          globalAnnotations.innerHTML += `
            <p>${text}</p>
            `;
        }
      }

      // for Reactions
      if (name.includes("ReactionStep")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);

        let annotationDiv = document.getElementById(
          `reactionTA-${elementName}`
        );
        if (annotationDiv != null) {
          annotationDiv.innerHTML += `
        <p>${text}</p>
        `;
        }
      }

      // for Structures
      if (name.includes("Structure")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);

        let annotationDiv = document.getElementById(
          `structureTA-${elementName}`
        );
        if (annotationDiv != null) {
          annotationDiv.innerHTML += `
        <p>${text}</p>
        `;
        }
      }

      // for Molecules
      if (name.includes("MolecularType")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);

        let annotationDiv = document.getElementById(
          `moleculeTA-${elementName}`
        );
        if (annotationDiv != null) {
          annotationDiv.innerHTML += `
        <p>${text}</p>
        `;
        }
      }

      // for species
      if (name.includes("Species")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);

        let annotationDiv = document.getElementById(`speciesTA-${elementName}`);
        if (annotationDiv != null) {
          annotationDiv.innerHTML += `
        <p>${text}</p>
        `;
        }
      }

      // for observables
      if (name.includes("RbmObservable")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);

        let annotationDiv = document.getElementById(
          `observableTA-${elementName}`
        );
        if (annotationDiv != null) {
          annotationDiv.innerHTML += `
        <p>${text}</p>
        `;
        }
      }

      // for Parameters
      if (name.includes("ModelParameter")) {
        var indexToSlice = name.indexOf("(") + 1;
        var length = name.indexOf(")");
        var elementName = name.slice(indexToSlice, length);

        let annotationDiv = document.getElementById(
          `parameterTA-${elementName}`
        );
        if (annotationDiv != null) {
          annotationDiv.innerHTML += `
        <p>${text}</p>
        `;
        }
      }
    }

    // Math Type -------------------------->

    for (i in json.BioModel.math) {
      var text = json.BioModel.math[i]._;
      var name = json.BioModel.math[i].$.name;
      let mathType = document.getElementById("mathType");
      if (mathType != null) {
        mathType.innerHTML += `
            <p>${text}</p>
            `;
      }
    }
  
      // Math Type2 -------------------------->

    for (i in json.BioModel.math2) {
      var text = json.BioModel.math2[i]._;
      var name = json.BioModel.math2[i].$.name;
      let mathType2 = document.getElementById("mathType2");
      if (mathType2 != null) {
        mathType2.innerHTML += `
            <p>${text}</p>
            `;
      }
    }
  });

// downloads section
console.log(selectedModel.innerHTML);
var selectedModelName = selectedModel.innerHTML;
console.log(selectedModelName);

// sbml file
fetch("/downloads/" + selectedModelName + ".sbml.xml").then((response) => {
  if (response) {
    console.log(response);
    let selectedFile = document.getElementById(`sbmlFile`);
    selectedFile.innerHTML = `
    <a href="${response.url}" download="${response.url}"> 
    <button type="button">Download File</button> 
    </a> 
    `;
  }
  if (!response.ok) {
    let selectedFile = document.getElementById(`sbmlFile`);
    selectedFile.innerHTML = `
      Not Available
      `;
    throw new Error("Not 2xx response");
  }
});

// metlab file
fetch("/downloads/" + selectedModelName + ".m").then((response) => {
  if (response) {
    console.log(response);
    let selectedFile = document.getElementById(`metlabFile`);
    selectedFile.innerHTML = `
    <a href="${response.url}" download="${response.url}"> 
    <button type="button">Download File</button> 
    </a> 
    `;
  }
  if (!response.ok) {
    let selectedFile = document.getElementById(`metlabFile`);
    selectedFile.innerHTML = `
      Not Available
      `;
    throw new Error("Not 2xx response");
  }
});

// BNGL file
fetch("/downloads/" + selectedModelName + ".bngl").then((response) => {
  if (response) {
    console.log(response);
    let selectedFile = document.getElementById(`bnglFile`);
    selectedFile.innerHTML = `
    <a href="${response.url}" download="${response.url}"> 
    <button type="button">Download File</button> 
    </a> 
    `;
  }
  if (!response.ok) {
    let selectedFile = document.getElementById(`bnglFile`);
    selectedFile.innerHTML = `
      Not Available
      `;
    throw new Error("Not 2xx response");
  }
});

// XML file
fetch("/downloads/" + selectedModelName + "_formatted.xml").then((response) => {
  if (response) {
    console.log(response);
    let selectedFile = document.getElementById(`fxmlFile`);
    selectedFile.innerHTML = `
    <a href="${response.url}" download="${response.url}"> 
    <button type="button">Download File</button> 
    </a> 
    `;
  }
  if (!response.ok) {
    let selectedFile = document.getElementById(`fxmlFile`);
    selectedFile.innerHTML = `
      Not Available
      `;
    throw new Error("Not 2xx response");
  }
});

// SEDML file
fetch("/downloads/" + selectedModelName + ".sedml.xml").then((response) => {
  if (response) {
    console.log(response);
    let selectedFile = document.getElementById(`sedmlFile`);
    selectedFile.innerHTML = `
    <a href="${response.url}" download="${response.url}"> 
    <button type="button">Download File</button> 
    </a> 
    `;
  }
  if (!response.ok) {
    let selectedFile = document.getElementById(`sedmlFile`);
    selectedFile.innerHTML = `
      Not Available
      `;
    throw new Error("Not 2xx response");
  }
});

// Deterministic XML file
fetch("/downloads/" + selectedModelName + "_Deterministic.xml").then(
  (response) => {
    if (response) {
      console.log(response);
      let selectedFile = document.getElementById(`dxmlFile`);
      selectedFile.innerHTML = `
    <a href="${response.url}" download="${response.url}"> 
    <button type="button">Download File</button> 
    </a> 
    `;
    }
    if (!response.ok) {
      let selectedFile = document.getElementById(`dxmlFile`);
      selectedFile.innerHTML = `
        Not Available
        `;
      throw new Error("Not 2xx response");
    }
  }
);
