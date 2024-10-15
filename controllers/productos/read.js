import { response } from "express";
import Producto from "../../models/Producto.js";

let allProd = async (req, res) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let prodStock = async (req, res) => {
    try {
        let stockQuery = req.params.stock
        let all = await Producto.find({ stock: stockQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let prodTipo = async (req, res) => {
    try {
        let tipoQuery = req.params.tipo
        let all = await Producto.find({ tipo: tipoQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let prodPrecio = async (req,res) => {
    try {
        let precioQuery = req.params.precio
        let all = await Producto.find({precio:precioQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { allProd, prodStock, prodTipo, prodPrecio }