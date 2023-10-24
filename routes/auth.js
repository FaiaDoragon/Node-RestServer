const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSingIn } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router()

router.post('/login', [
    check('correo', 'el correo es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login );

router.post('/google', [
    check('id_token', 'El id_token es necesario').not().isEmpty(),
    validarCampos
], googleSingIn );

module.exports = router;