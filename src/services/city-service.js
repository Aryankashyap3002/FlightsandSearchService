const { CityRepository } = require('../repository/index') 

class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async destroyCity(cityId) {
        try {
            const city = await this.CityRepository.deleteCity(cityId);
            return true;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error}; 
        }
    }

    async getCity(cityId) {
        try {
           const city = await this.CityRepository.getCity(cityId);
           return city; 
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await this.CityRepository.getAllCities();
            return cities;  
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};            
        }
    }
}

  

module.exports = CityService; 

// home-work: Everytime i created a cityService a new cityRepository willl created, how can we stop this.