const express = require('express');

const PORT = 3000;


const setupAndStartServer = async ()=>{
    const app = express();

    app.get('/',(req,res)=>{
        res.json({
            "Hey": "Nodejs",
            
        })
    })
    app.listen(PORT,()=>{
        console.log('Server Started')
    })
}

setupAndStartServer();