import express from "express"
import "dotenv/config.js"
import "./config/db.js"
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/index.js"

const server = express()
const PORT = process.env.PORT
const ready = () => console.log("Server Corriendo en el Puerto: "+PORT);

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(morgan("dev"))
server.use("/api",indexRouter)

server.listen(PORT, ready)
