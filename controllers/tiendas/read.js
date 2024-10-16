import Tienda from "../../models/Tienda.js";
import findDocument from "../findRead.js";

/*let allTiendas = async (req, res) => {
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
}*/



/*// Función auxiliar para manejar las respuestas
const handleResponse = (res, data, status = 200) => {
    return res.status(status).json({ response: data });
};

// Función genérica para realizar búsquedas
const findTiendas = async (query, res) => {
    try {
        let all = await Tienda.find(query);
        return handleResponse(res, all);
    } catch (error) {
        return handleResponse(res, error, 500);
    }
};*/

// Obtener todas las tiendas
let allTiendas = async (req, res) => {
    return await findDocument(Tienda,{}, res);
};

// Obtener tiendas por rubro
let rubroTienda = async (req, res) => {
    let rubroQuery = req.params.rubro;
    return await findDocument(Tienda,{ rubro: rubroQuery }, res);
};

// Obtener tiendas abiertas 24 horas
let tiendaOpen24 = async (req, res) => {
    let open24Query = req.params.open24;
    return await findDocument(Tienda,{ open24: open24Query }, res);
};

// Obtener tiendas por número de teléfono
let tiendaTel = async (req, res) => {
    let telefonoQuery = req.params.telefono;
    return await findDocument(Tienda,{ telefono: telefonoQuery }, res);
};

export { allTiendas, rubroTienda, tiendaOpen24, tiendaTel };