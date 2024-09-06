const express = require("express");
const bodyParser = require("body-parser");
const { City } = require('./models/index');
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');
const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name: "New Delhi"});
    });
}

// environment variable :- It is a dynamic named value that can affect the way running processes behave on a computer.
// ORM :- Object relational mapp

setupAndStartServer();