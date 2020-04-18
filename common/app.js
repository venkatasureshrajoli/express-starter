const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
module.exports = function(name,port){
    const app = express();
    
    const server = app.listen(port, ()=>{
        console.log(`App ${name} started running on PORT ${port}`);
    });

    server.on('close', ()=>{
        console.log(`Server closed`);
    });

    server.on('error', ()=>{
        if (err.code === 'EADDRINUSE') {
            console.log('Address or Port in use, retrying...');
            setTimeout(() => {
                server.close();
                server = app.listen(port);
            }, 5000);
        } else {
            console.log({ err: `Server error ${err}` });
        }
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(helmet());
    app.use(cors());
    return app;
}