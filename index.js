const http = require("http");
const fs = require("fs");
const url = require("url");

http
	.createServer((req, res) => {
		let q = url.parse(req.url, true);
		let file = "." + q.pathname;

		fs.readFile(file, (err, data) => {
			if (err) {
				res.writeHead(404, { "content-type": "text/html" });
				fs.readFile("404.html", (err, data) => {
                    if (err) res.end("404 Page Not Found");
					res.end(data);
				});
			} else {
				res.writeHead(200, { "content-type": "text/html" });
				res.write(data);
				return res.end();
			}
		});
	})
	.listen(8080);
