const express = require('express');
const cors = require('cors');
const { dbConection } = require('../db/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios'
        this.authPath = '/api/auth'



        //conectar a base de datos
        this.conectarDB()

        //middleware
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    async conectarDB() {

        await dbConection();

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
        this.app.use(this.authPath, require('../routes/auth'))
        this.app.use(this.usuariosPath, require('../routes/user'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto:`, this.port);
        });
    }

}

module.exports = Server;    