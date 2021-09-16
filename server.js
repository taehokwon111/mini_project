const express = require('express')
const app = express()
const port = 3000
const parser = require('xml2json-light'); 
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname+"/public"));


app.get("/",(req,res)=>{
	res.sendFile(__dirname+"public/index.html");
});

app.listen(3000,(err)=>{
	if(err) return console.log(err);
	console.log("The server is listening on port 3000");

});