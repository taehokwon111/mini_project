const express = require('express')
const app = express()
const port = 3000;
const parser = require('xml2json-light'); 
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')
app.use(express.static(__dirname+"/public"));
app.set('view engine','ejs');

app.get("/",(req,res)=>{

	res.sendFile(__dirname+"/public/index.ejs");

});

app.listen(port,(err)=>{
	if(err) return console.log(err);
	console.log("The server is listening on port http://localhost:3000/");
	console.log(express.static('public'))

});