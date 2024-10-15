import { Router } from "express";
import { allProd, prodPrecio, prodStock, prodTipo } from "../controllers/productos/read.js"

const router = Router()

router.get("/all", allProd)
router.get("/stock/:stock", prodStock)
router.get("/tipo/:tipo", prodTipo)
router.get("/precio/:precio", prodPrecio)

export default router