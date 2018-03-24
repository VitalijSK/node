const http = require('http');
const url = require('url');
const date = require('./server/data');


const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'application/json'});
  
        const parsedUrl = url.parse(req.url, true);
        const time = new Date(parsedUrl.query.iso);
        let buff = '';
        if(parsedUrl.pathname === '/api/parsetime')
        {
            buff = date.parsetime(time);
            
        }
        else if(parsedUrl.pathname === '/api/unixtime')
        {
            buff = date.unix(time);
        }
    
    //res.write(JSON.stringify(parsedUrl));
    res.write(JSON.stringify(buff));
    res.end();
});


//server.listen(800);
server.listen(process.argv[2]);