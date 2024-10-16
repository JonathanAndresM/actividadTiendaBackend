import { Router } from "express";
import { allTiendas, rubroTienda, tiendaOpen24, tiendaTel } from "../controllers/tiendas/read.js";
import { create, createMany } from "../controllers/tiendas/create.js";

const router = Router()

router.get("/", allTiendas)
router.get("/rubro/:rubro", rubroTienda)
router.get("/open24/:open24", tiendaOpen24)
router.get("/telefono/:telefono", tiendaTel)
router.post("/create", create)
router.post("/createMany", createMany)

export default router