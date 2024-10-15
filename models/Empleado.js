import { Schema,model } from "mongoose";

let collection = "empleados"
let schema = new Schema({
    nombre:{type:String,required:true},
    cargo:{type:String,required:true},
    salario:{type:Number,required:true},
    fechaInicio:{type:String,required:true},
    turno:{type:String,required:true},
},{
    timestamps:true
})

let Empleado = model(collection,schema)

export default Empleado