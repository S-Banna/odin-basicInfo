const express = require("express");
const app = express();
const path = require('path');

const PORT = 8080;

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact", (req, res) => {
	res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, (req, res) => {
	console.log("Up and running on port " + PORT);
});
