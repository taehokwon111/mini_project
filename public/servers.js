const parser = require('xml2json-light'); 
const axios = require('axios')

app.use(express.static(__dirname+"/public"));

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
  console.log(`${a}, ${b}, ${c}, ${d}`);

}, 1000);