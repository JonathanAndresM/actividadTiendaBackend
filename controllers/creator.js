import handleResponse from "./handleResponse.js"

let creator = async (Models, req, res) => {
    try {
        let item = req.body
        let createItem = await Models.create(item)
        return handleResponse(res, createItem, 201);
    } catch (error) {
        return handleResponse(res, error, 500);
    }
}

let creatorMany = async (Models, req, res) => {
    try {
        let item = req.body
        let createItems = await Models.insertMany(item)
        return handleResponse(res, createItems, 201);
    } catch (error) {
        return handleResponse(res, error, 500);
    }
}

export { creator, creatorMany }