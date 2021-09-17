const express = require('express')
const app = express()
const port = 3000
const parser = require('xml2json-light'); 
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')
app.set(express.static(__dirname+"/public/.style.css"));
app.use(express.static(__dirname+"/public/.style.css"));
app.use('/static', express.static('public'));


app.get("/",(req,res)=>{

	let a, b, c, d;

	const APIKEY = "dfGEh0ZxCmcCs9D3T70URlxTe77aM%2FAVq%2F47cZb2gRko%2BxANXozELIoiMtAp92ANXucyBoEzbHvcMOYSXzzgDw%3D%3D";
	const dataget = axios({
	  method : 'get',
	  url : 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson', 
		params: {
		  serviceKey: decodeURIComponent(APIKEY),
		  pageNo: 1,
		  numOfRows: 10,
		  startCreateDt: 20210916,
		  endCreateDt: 20210916
		}
	}).then(r => {
	
	  let json = parser.xml2json("<eds>test?</eds?>");
	  console.log(json);
	
	  
	a = JSON.stringify(r.data.response.body.items.item.decideCnt);
	b = JSON.stringify(r.data.response.body.items.item.clearCnt);
	c = JSON.stringify(r.data.response.body.items.item.deathCnt);
	d = JSON.stringify(r.data.response.body.items.item.examCnt);
	});
	
	setTimeout(() => {

		let data_list = {
			test1 : a,
			test2 : b,
			test3 : c,
			test4 : d
		}
	  console.log(`${data_list.test1}, ${data_list.test2}, ${data_list.test3}, ${data_list.test4}`);
		//  console.log(data_list);
		// res.send(data_list);
		// res.send(data_list.test1, data_list.test2, data_list.test3, data_list.test4);
	res.sendFile(__dirname+"/public/index.html");
	}, 500);
	

});

app.listen(port,(err)=>{
	if(err) return console.log(err);
	console.log("The server is listening on port http://localhost:3000/");
	console.log(express.static('public'))

});