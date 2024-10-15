import Empleado from "../../models/Empleado.js";

/*let allEmpleados = async (req, res) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let empleadosPorTurno = async (req, res) => {
    try {
        let turnoQuery = req.params.turno
        let all = await Empleado.find({ turno: turnoQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let empleadosCargo = async (req, res) => {
    try {
        let cargoQuery = req.params.cargo
        let all = await Empleado.find({ cargo: cargoQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let empleadosSalario = async (req, res) => {
    try {
        let salarioQuery = req.params.salario
        let all = await Empleado.find({ salario: salarioQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}*/



const handleResponse = (res, data, status = 200) => {
    return res.status(status).json({ response: data })
}

const findEmpleados = async (query, res) => {
    try {
        let all = await Empleado.find(query)
        return handleResponse(res, all)
    } catch (error) {
        return handleResponse(res, error, 500)
    }
}

let allEmpleados = async (req, res) => {
    return await findEmpleados({}, res)
}

let empleadosPorTurno = async (req,res) => {
    let turnoQuery = req.params.turno
    return await findEmpleados({turno:turnoQuery},res)
}

let empleadosCargo = async (req,res) => {
    let cargoQuery = req.params.cargo
    return await findEmpleados({cargo:cargoQuery}, res)
}

let empleadosSalario = async (req,res) => {
    let salarioQuery = req.params.salario
    return await findEmpleados({salario:salarioQuery},res)
}

export { allEmpleados, empleadosPorTurno, empleadosCargo, empleadosSalario }