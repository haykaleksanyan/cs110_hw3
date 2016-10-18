const http = require('http');

const mySerever = http.createServer(function (req, res){
     if (req.url ==='/main') {
           res.writeHead(200, {'Content-Type' : 'text/plain'});
           res.end ('1Main Page');
     }

     if (req.url === '/help') {
          res.writeHead(200, {'Content-Type' : 'text/plain'});
          res.end('OHHH');
     }

     if (req.url === '/file') {
          res.writeHead(404, {'Content-Type' : 'text/plain'});
          res.end('Not Found');
     }


     if (req.url === '/computer') {
          res.writeHead(200, {'Content-Type' : 'text/plain'});
          res.end('helloworld');
      }


      if (req.url === '/eeee') {
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.end('ERROR 404 NOT FOUND');
      }

      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.end("please use one of the entries");
 
});

               mySerever.listen(3001);
               console.log('Server is currently listening to --- 3001');