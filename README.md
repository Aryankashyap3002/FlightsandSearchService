# Welcome to Flights Service

## Project Setup
- Clone the project on your local 
- Execute `npm install` on the same path as of root directory of teh
  download project 
    - Create a `.env` file in the root directory and add the following environment variable
        - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then  add then   
  add following piece of json
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

    - Once you have added your db config as listed above, go to the src folder from 
      your terminal and  executes `npx sequelize db:create`
      and then execute

      `npx sequelize db:migrate `
    ...

  ## DB Design

     - Airplane Table
     - Flight
     - Airport
     - City

     - A flight belongs to an airplane but one airplane can be used in multiple flights.

     - A city has many airports but one airport belongs to a city
     
     - One airport can have flights, but a flight belongs to one airport.


     ## Tables

     ### City -> id, name, created_at, updated_at
     ### Airport -> id, name, address, city_id, created_at, updated_at
         Relationship -> City has any airports and belongs to a city (one to many relationship with airports)