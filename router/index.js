import { Router } from "express";
import tiendasRouter from "./tiendas.js"
import prodRouter from "./productos.js"
import empleadosRouter from "./empleados.js"

const router = Router()

router.use("/tiendas", tiendasRouter)
router.use("/productos", prodRouter)
router.use("/empleados", empleadosRouter)

export default router