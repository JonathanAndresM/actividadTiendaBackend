import { Router } from "express";
import { allTiendas, rubroTienda, tiendaOpen24, tiendaTel } from "../controllers/tiendas/read.js";

const router = Router()

router.get("/all", allTiendas)
router.get("/rubro/:rubro", rubroTienda)
router.get("/open24/:open24", tiendaOpen24)
router.get("/telefono/:telefono", tiendaTel)

export default router