const { CityService } = require('../services/index');

// for create -> post
// data -> req.body
 
const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Succesfully created a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}
// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.destroyCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Succesfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete",
            err: error
        })
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Succesfully fetched a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a city",
            err: error
        })
    }
}

// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Succesfully updated the city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}