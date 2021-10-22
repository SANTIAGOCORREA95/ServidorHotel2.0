const { model, Schema } = require('mongoose')

const ReservaModelo = Schema({

    nombre:{
        type:String,
        require: true
    },

    apellido: {
        type: String,
        required: true
    },

    telefono: {
        type: Number,
        required: true
    },

    fechaInicio: {
        type: Number,
        required: true
    },

    fechaFinal: {
        type: Number,
        required: true
    },
    
    numPersonas: {
        type: Number,
        required: true
    }

})

module.exports = model('Reservas', ReservaModelo)
