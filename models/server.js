const express = require('express');
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = {
            usuarios: '/api/usuarios'
        }

        //middleware
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json( ));

        //Directorio publico
        this.app.use(express.static('public'));
        
    }

    routes() {
        
        this.app.use(this.usuariosPath.usuarios, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto:`, this.port);
        });
    }

}

module.exports = Server;    
