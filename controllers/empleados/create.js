import Empleado from "../../models/Empleado.js";
import { creator, creatorMany } from "../creator.js";
//import handleResponse from "../handleResponse.js";

/*const create = async (req,res) => {
    try {
    let empleado = req.body
    await Empleado.create(empleado)
    return handleResponse(res,empleado, 201)
    } catch (error) {
        return handleResponse(res,error,500)
    }
}

const createMany = async (req,res) => {
    try {
    let empleados = req.body
    await Empleado.insertMany(empleados)
    return handleResponse(res,empleados, 201)
    } catch (error) {
        return handleResponse(res,error,500)
    }
}*/

const create = async (req, res) => {
    return await creator(Empleado, req, res)
}

const createMany = async (req, res) => {
    return await creatorMany(Empleado, req, res)
}

export { create, createMany }