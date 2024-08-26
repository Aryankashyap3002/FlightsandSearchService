const express = require("express");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    })
}

// environment variable :- It is a dynamic named value that can affect the way running processes behave on a computer.

setupAndStartServer();