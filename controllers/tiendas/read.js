import { response } from "express";
import Tienda from "../../models/Tienda.js";

let allTiendas = async (req, res) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let rubroTienda = async (req, res) => {
    try {
        let rubroQuery = req.params.rubro
        let all = await Tienda.find({ rubro: rubroQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let tiendaOpen24 = async (req, res) => {
    try {
        let open24Query = req.params.open24
        let all = await Tienda.find({ open24: open24Query })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let tiendaTel = async (req,res) => {
    try {
        let telefonoQuery = req.params.telefono
        let all = await Tienda.find({telefono: telefonoQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { allTiendas, rubroTienda, tiendaOpen24, tiendaTel }