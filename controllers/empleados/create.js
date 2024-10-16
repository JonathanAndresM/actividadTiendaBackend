import Empleado from "../../models/Empleado.js";

const handleResponse = (res, data, status = 201) => {
    return res.status(status).json({ response: data })
}

const create = async (req,res) => {
    try {
    let empleado = req.body
    await Empleado.create(empleado)
    return handleResponse(res,empleado)
    } catch (error) {
        return handleResponse(res,error,500)
    }
}

const createMany = async (req,res) => {
    try {
    let empleados = req.body
    await Empleado.insertMany(empleados)
    return handleResponse(res,empleados)
    } catch (error) {
        return handleResponse(res,error,500)
    }
}

export {create,createMany}