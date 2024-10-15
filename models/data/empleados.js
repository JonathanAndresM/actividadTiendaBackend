import "dotenv/config.js"
import "../../config/db.js"
import Empleado from "../Empleado.js"

let empleados = [
    { nombre: "Pedro Álvarez", cargo: "Despachador de combustible", salario: 32000, fechaInicio: "2021-05-12", turno: "Mañana" },
    { nombre: "Laura Castillo", cargo: "Cajera", salario: 30000, fechaInicio: "2020-03-07", turno: "Tarde" },
    { nombre: "Mario Gómez", cargo: "Supervisor de turno", salario: 45000, fechaInicio: "2019-10-25", turno: "Noche" },
    { nombre: "Carla Fernández", cargo: "Despachadora de combustible", salario: 32000, fechaInicio: "2021-07-15", turno: "Tarde" },
    { nombre: "José Ríos", cargo: "Técnico de mantenimiento", salario: 40000, fechaInicio: "2018-12-01", turno: "Mañana" },
    { nombre: "Ana Torres", cargo: "Encargada de tienda", salario: 35000, fechaInicio: "2019-06-21", turno: "Tarde" },
    { nombre: "Luis Martínez", cargo: "Limpieza", salario: 28000, fechaInicio: "2020-08-05", turno: "Noche" },
    { nombre: "Marta Herrera", cargo: "Cajera", salario: 30000, fechaInicio: "2021-01-22", turno: "Mañana" },
    { nombre: "Héctor Méndez", cargo: "Supervisor de turno", salario: 46000, fechaInicio: "2019-04-15", turno: "Tarde" },
    { nombre: "Beatriz Vargas", cargo: "Despachadora de combustible", salario: 32000, fechaInicio: "2021-09-09", turno: "Mañana" },
    { nombre: "Carlos Peña", cargo: "Técnico de lavado", salario: 31000, fechaInicio: "2020-02-17", turno: "Noche" },
    { nombre: "Esteban Sánchez", cargo: "Encargado de almacén", salario: 37000, fechaInicio: "2019-05-14", turno: "Mañana" },
    { nombre: "Paola Núñez", cargo: "Cajera", salario: 30000, fechaInicio: "2021-11-13", turno: "Tarde" },
    { nombre: "Javier Ramírez", cargo: "Despachador de combustible", salario: 32000, fechaInicio: "2020-07-27", turno: "Noche" },
    { nombre: "Sofía Pérez", cargo: "Supervisora de tienda", salario: 43000, fechaInicio: "2018-09-10", turno: "Mañana" },
    { nombre: "Ricardo Vega", cargo: "Técnico de mantenimiento", salario: 40000, fechaInicio: "2019-11-18", turno: "Tarde" },
    { nombre: "Gloria Jiménez", cargo: "Encargada de tienda", salario: 36000, fechaInicio: "2020-04-12", turno: "Noche" },
    { nombre: "Roberto Paredes", cargo: "Despachador de combustible", salario: 32000, fechaInicio: "2021-02-28", turno: "Mañana" },
    { nombre: "Carolina Espinoza", cargo: "Cajera", salario: 30000, fechaInicio: "2021-10-05", turno: "Tarde" },
    { nombre: "Felipe Rojas", cargo: "Supervisor de turno", salario: 45000, fechaInicio: "2019-03-11", turno: "Noche" }
  ];

Empleado.insertMany(empleados)
  