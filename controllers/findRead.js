import handleResponse from "./handleResponse.js"

const findDocument = async (Models,query, res) => {
    try {
        let all = await Models.find(query)
        return handleResponse(res, all, 200)
    } catch (error) {
        return handleResponse(res, error, 500)
    }
}

export default findDocument