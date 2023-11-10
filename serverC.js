'use strict';
const http = require('http');
const {port,host} = require('./config.json');
const person = require('./person');
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Person Data</title>
    </head>
    <body>
    <h1>Person Data</h1>
    <p>Firstname: ${person.firstName}</p>
    <p>Lastname: ${person.lastName}</p>
    <p>Age: ${person.age}</p> 
    </body>
    </html>`);
    res.end();
})
server.listen(port,host,()=>console.log(`${host}:${port}...`));