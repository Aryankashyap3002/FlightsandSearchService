# Welcome to Flights Service

## Project Setup
- Clone the project on your local 
- Execute `npm install` on the same path as of root directory of teh
download project 
    - Create a `.env` file in the root directory and add the following environment variable
        - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then  add then add following piece of json

    ...

    {
        "development": {
            "username":<YOUR_DB_LOGIN_NAME>,
            "password": <Your_password>,
            "database": "Flight_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
    }



    ...

    - Once you have added your db config as listed above, go to the src folder from your terminal and  executes `npx sequelize db:create`