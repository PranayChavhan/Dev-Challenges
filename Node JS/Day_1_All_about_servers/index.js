// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) =>{
//     res.send('Hello, Node.js with Express!');
// });

// app.listen(port, () =>{
//     console.log(`Server running at http://localhost:${port}`);
// })



import http from 'http';

const port = 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello")
  response.end();
});

server.listen(port, () => {  
    console.log(`Server running at http://localhost:${port}`);
});	