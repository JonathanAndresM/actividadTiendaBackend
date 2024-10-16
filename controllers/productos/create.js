import Producto from "../../models/Producto.js";

const handleResponse = (res, data, status = 201) => {
    return res.status(status).json({ response: data })
}

const create = async (req, res) => {
    try {
        let producto = req.body
        await Producto.create(producto)
        return handleResponse(res, producto)
    } catch (error) {
        return handleResponse(res, error, 500)
    }
}

const createMany = async (req, res) => {
    try {
        let productos = req.body
        await Producto.insertMany(productos)
        return handleResponse(res, productos)
    } catch (error) {
        return handleResponse(res, error, 500)
    }
}

export { create, createMany }