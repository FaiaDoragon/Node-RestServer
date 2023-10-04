const  { response } = require('express')

const usuariosGet = (req, res = response ) => {
    res.json({

        ok: true,
        msg: "get api - controlador"
    });
}

const 
usuariosPost = (req, res = response ) => {
    
    const { nombre, edad} = req.body

    res.json({
        msg: "post api - controlador",
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response ) => {
    res.json({

        ok: true,
        msg: "put api - controlador"
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