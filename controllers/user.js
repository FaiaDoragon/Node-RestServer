const  { response, request } = require('express')
const bcryptjs = require('bcryptjs')


const Usuario = require('../models/usuario');


// controladores de las peticiones HTTP
const usuariosGet = (req = request, res = response ) => {

    const {q, nombre = 'no name', apikey} = req.query;

    res.json({
        msg: "get api - controlador",
        q,
        nombre,
        apikey
    });
}

const usuariosPost = async (req, res = response ) => {

    const { nombre, correo, password, rol} = req.body
    const usuario = new Usuario( {nombre, correo, password, rol} )

    //Verificar si el correo existe
    

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password,salt)

    //Guardar en DB
    await usuario.save();

    res.json({
        msg: "post api - controlador",
        usuario
    });
}

const usuariosPut = async(req, res = response ) => {

    const { id } = req.params;
    const { password, google, correo, ...resto } = req.body;

    //TODO validar con base de datos
    if ( password ) {
        //encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuarioDB = await Usuario.findByIdAndUpdate( id, resto )

    res.json({
        msg: "put api - controlador",
        usuarioDB
    });
}

const usuariosPatch = (req, res = response ) => {
    res.json({

        ok: true,
        msg: "Patch api - controlador"
    });
}

const usuariosDelete = (req, res = response ) => {
    res.json({

        ok: true,
        msg: "Delete api - controlador"
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}