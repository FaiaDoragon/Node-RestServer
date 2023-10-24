
const validaJWT = require('../middleware/validar-jwt');
const validaRoles = require('../middleware/validar-roles');
const validarCampos = require('../middleware/validar-campos');

module.exports = {
    ...validaJWT,
    ...validaRoles,
    ...validarCampos
}