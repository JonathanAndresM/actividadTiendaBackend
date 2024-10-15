import "dotenv/config.js"
import "../../config/db.js"
import Tienda from "../Tienda.js"

const tiendas = [
    {
      nombre: "Supermercado La Esperanza",
      direccion: "Av. Libertador 1234, Buenos Aires, Argentina",
      telefono: 541122334455,
      rubro: "Supermercado",
      open24: false
    },
    {
      nombre: "Farmacia Central",
      direccion: "Calle 9 de Julio 567, Córdoba, Argentina",
      telefono: 543512223344,
      rubro: "Farmacia",
      open24: true
    },
    {
      nombre: "Electro Mundo",
      direccion: "Av. Santa Fe 4321, Rosario, Argentina",
      telefono: 543415556677,
      rubro: "Electrónica",
      open24: false
    },
    {
      nombre: "Panadería El Molino",
      direccion: "Calle Las Heras 987, Mendoza, Argentina",
      telefono: 542615556677,
      rubro: "Panadería",
      open24: false
    },
    {
      nombre: "Estación de Servicio YPF",
      direccion: "Ruta Nacional 9, Km 123, Salta, Argentina",
      telefono: 543876554433,
      rubro: "Combustibles",
      open24: true
    }
  ];

Tienda.insertMany(tiendas)