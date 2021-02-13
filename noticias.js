const http = require('http');

http.createServer((req, res) => {
    const categoria = req.url;

    if (categoria === '/tecnologia') {
        res.end("<p>Notícias de tecnologia</p>");
    } else {
        res.end("<p>Home</p>")
    }

}).listen(3000);