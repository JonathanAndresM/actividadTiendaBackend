import { Router } from "express";
import { allProd, prodPrecio, prodStock, prodTipo } from "../controllers/productos/read.js"
import { create, createMany } from "../controllers/productos/create.js";

const router = Router()

router.get("/", allProd)
router.get("/stock/:stock", prodStock)
router.get("/tipo/:tipo", prodTipo)
router.get("/precio/:precio", prodPrecio)
router.post("/create",create)
router.post("/createMany",createMany)

export default router