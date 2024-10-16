import Producto from "../../models/Producto.js";
import { creator, creatorMany } from "../creator.js";
//import handleResponse from "../handleResponse.js";

/*const create = async (req, res) => {
    try {
        let producto = req.body
        await Producto.create(producto)
        return handleResponse(res, producto, 201)
    } catch (error) {
        return handleResponse(res, error, 500)
    }
}

const createMany = async (req, res) => {
    try {
        let productos = req.body
        await Producto.insertMany(productos)
        return handleResponse(res, productos, 201)
    } catch (error) {
        return handleResponse(res, error, 500)
    }
}*/

const create = async (req, res) => {
    return await creator(Producto, req, res)
}

const createMany = async (req, res) => {
    return await creatorMany(Producto, req, res)
}

export { create, createMany }