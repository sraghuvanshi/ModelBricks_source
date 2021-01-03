# ModelBricks.org

Many computational models in biology are built and intended for "single-use"; the modeling assumptions and descriptions of model elements must be found in the corresponding paper. Expanding models to new and more complex situations is non-trivial. As a result, new models are almost always created anew, repeating literature searches for kinetic parameters, initial conditions and modeling specifics. It is akin to building a brick house starting with a pile of clay. Here we present tghe ​a database of ModelBricks - well-annotated, reusable component mechanisms that can be assembled into fully annotated mathematical models for cell biology. Here we present a database of ModelBricks - well-annotated, reusable component mechanisms that can be assembled into fully annotated mathematical models for cell biology.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development, contribution and testing purposes.

### Prerequisites

The only prerequisite for this project is Node.js. Hence, before starting please make sure that Node.js v12.16.0 or above is installed in your machine. 
If not installed already, follow the instructions below:

```bash
# Check if Node.js is already installed
$ node -v

# If a version number is displayed, then its already installed and you are good to go. Otherwise head over to https://nodejs.org/en/download/ and download the latest version. To check it's installed, follow the above mentioned step.
```

### Installing and Running project locally

Fork this repository and then Clone that to your local machine. Follow the steps given below to run the project locally:

```bash
# install dependencies
$ npm install

# Start development server and nodemon at http://localhost:4002/
$ npm start
```

## Built With

* [Node.js](http://www.dropwizard.io/1.0.2/docs/) - Back-end 
* [Express](https://rometools.github.io/rome/) - Back-end web application framework for Node.js
* [Handlebars](https://maven.apache.org/) - Frontend framework 
* [xml2js](https://maven.apache.org/) - npm module used for converting VCML(xml) data to JSON data


## Authors

* **Michael Blinov** - *Mainting the project* - [Github Profile](https://github.com/vcellmike)
* **Ann Cowan** - *Mentor* - [Github Profile](https://github.com/ACowan0105)
* **Saksham Raghuvanshi** - *Initial Development* - [Github Profile](https://github.com/sraghuvanshi)


## License

This project is licensed under the NRNB Organization- Check here - [Github repo](https://github.com/nrnb)

## Acknowledgments

* [vcell Beta API](https://vcellapi-beta.cam.uchc.edu:8080/biomodel?bmName=&bmId=&category=all&owner=ModelBrick&savedLow=&savedHigh=&startRow=1&maxRows=10&orderBy=date_desc)
* [Vcell](https://github.com/virtualcell/vcell)
