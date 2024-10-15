import { Router } from "express";
import { allEmpleados, empleadosCargo, empleadosPorTurno, empleadosSalario } from "../controllers/empleados/read.js"

const router = Router()

router.get("/all", allEmpleados)
router.get("/turno/:turno", empleadosPorTurno)
router.get("/cargo/:cargo",empleadosCargo)
router.get("/salario/:salario", empleadosSalario)

export default router