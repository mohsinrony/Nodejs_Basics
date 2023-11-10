'use strict';
const http = require('http');
const port = 3010;
const host = 'localhost'; //'127.0.0.1'

const server = http.createServer((request,response)=>{
  //  console.log('function called')
response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
response.write('<h1>Hello World!</h1>');
response.end();
});

server.listen(port,host,()=>console.log(`Server ${host} is serving at port ${port}`));
