var http = require('http');
var fs = require('fs');

var msg = process.env.APP_MSG;

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(msg);

});

fs.readFile('/opt/app-root/secure/myapp.sec', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
});


var port = 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
