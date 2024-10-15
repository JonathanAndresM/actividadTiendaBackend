import mongoose from "mongoose";

let url = process.env.URI_MONGO

async function connectDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("base de datos conectada");
    } catch (error) {
        console.error(error)
    }
}

connectDataBase()