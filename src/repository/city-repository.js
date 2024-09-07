const { City } = require('.../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw(error);
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
            console.log("Something went wrong");
            throw(error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw(error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId); // as cityId is a primary key we can use findByPk instead of findByOne and then using where clause.
            return city;
        } catch (error) {
            console.log("Something went wrong");
            throw(error);
        }
    }
}



module.exports = CityRepository;