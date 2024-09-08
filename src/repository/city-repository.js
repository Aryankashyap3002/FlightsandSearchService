const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: { 
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            // Below approach also work but will not return updated object.
            // If u are using pgsql then returning: true can be used, else not.
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId); // as cityId is a primary key we can use findByPk instead of findByOne and then using where clause.
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;   
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};            
        }
    }
}



module.exports = CityRepository;