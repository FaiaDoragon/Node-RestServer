const { Router } = require('express');
const { usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosPatch, 
    usuariosDelete 
} = require('../controllers/user');

const router = Router()

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.patch('/', usuariosPut);

router.patch('/', usuariosPatch);

router.patch('/', usuariosDelete);


module.exports = router;
