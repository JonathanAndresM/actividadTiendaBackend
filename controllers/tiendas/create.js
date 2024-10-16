import Tienda from "../../models/Tienda.js";
import { creator, creatorMany } from "../creator.js";
//import handleResponse from "../handleResponse.js";

/*const handleResponse = (res, data, status = 201) => {
    return res.status(status).json({ response: data });
};*/

/*let create = async (req, res) => {
    try {
        let tienda = req.body
        await Tienda.create(tienda)
        return handleResponse(res, tienda,201);
    } catch (error) {
        return handleResponse(res, error, 500);
    }
}

let createMany = async (req, res) => {
    try {
        let tiendas = req.body
        await Tienda.insertMany(tiendas)
        return handleResponse(res, tiendas,201);
    } catch (error) {
        return handleResponse(res, error, 500);
    }
}*/

const create = async (req, res) => {
    return await creator(Tienda, req, res)
}

const createMany = async (req, res) => {
    return await creatorMany(Tienda, req, res)
}

export { create, createMany }