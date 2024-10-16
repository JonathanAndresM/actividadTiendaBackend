import Producto from "../../models/Producto.js";
import findDocument from "../findRead.js";

/*let allProd = async (req, res) => {
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

let prodPrecio = async (req, res) => {
    try {
        let precioQuery = req.params.precio
        let all = await Producto.find({ precio: precioQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}*/



/*const handleResponse = (res, data, status = 200) => {
    return res.status(status).json({ response: data })
}

const findProd = async (query,res) =>{
    try {
        let all = await Producto.find(query)
        return handleResponse({},res)
    }catch (error) {
        return handleResponse(res, error, 500)
    }
}*/

let allProd = async (req,res) => {
    return await findDocument(Producto,{},res)
}

let prodStock = async (req,res) => {
    let stockQuery = req.params.stock
    return await findDocument(Producto,{stock:stockQuery},res)
}

let prodTipo = async (req,res) => {
    let tipoQuery = req.params.tipo
    return await findDocument(Producto,{tipo:tipoQuery},res)
}

let prodPrecio = async (req,res) => {
    let precioQuery = req.params.precio
    return await findDocument(Producto,{precio:precioQuery},res)
}

export { allProd, prodStock, prodTipo, prodPrecio }