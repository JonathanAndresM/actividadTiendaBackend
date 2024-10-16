import { Router } from "express";
import { allEmpleados, empleadosCargo, empleadosPorTurno, empleadosSalario } from "../controllers/empleados/read.js"
import { create, createMany } from "../controllers/empleados/create.js";

const router = Router()

router.get("/", allEmpleados)
router.get("/turno/:turno", empleadosPorTurno)
router.get("/cargo/:cargo",empleadosCargo)
router.get("/salario/:salario", empleadosSalario)
router.post("/create",create)
router.post("/createMany",createMany)

export default router