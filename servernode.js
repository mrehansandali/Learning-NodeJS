const fs = require('fs')
const http = require('http');
const port = process.env.PORT || 1111;
const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>Hello Rehan</h1><p>Congratulations you created your first Node.js Server</p>')
    }

    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>Hello Rehan</h1><p>About our learning Node.js</p>')
    }

    else if(req.url == '/form'){
        res.statusCode = 200;
        const formdata = fs.readFileSync('index.html');
        res.end(formdata.toString());
    }

    else{
        res.statusCode = 404;
        res.end('<h1>Not Found</h1>')
    }
})

server.listen(port)