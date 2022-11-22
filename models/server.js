const express = require('express');

class Server{
    app = express()

    constructor(){
        this.app.get('/',(req, res) => res.send('Hello World'))
        this.app.listen(port, () => console.log(`Servidor HTTP port: ${port}`))
        this.routes();
    }

}

module.exports = Server;