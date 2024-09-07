const express = require("express");
const bodyParser = require("body-parser");
const { City } = require('./models/index');
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const CityRepository = require('./repository/city-repository');
const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name: "New Delhi"});// 3rd lecture ends.
    });
}

// environment variable :- It is a dynamic named value that can affect the way running processes behave on a computer.
// ORM :- Object relational mapp

setupAndStartServer();