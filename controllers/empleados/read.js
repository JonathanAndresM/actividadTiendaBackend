import { response } from "express";
import Empleado from "../../models/Empleado.js";

let allEmpleados = async (req, res) => {
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

let empleadosCargo = async (req,res) => {
    try {
        let cargoQuery = req.params.cargo
        let all = await Empleado.find({cargo:cargoQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let empleadosSalario = async (req,res) => {
    try {
        let salarioQuery = req.params.salario
        let all = await Empleado.find({salario:salarioQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { allEmpleados, empleadosPorTurno, empleadosCargo, empleadosSalario }