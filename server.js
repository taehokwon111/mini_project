const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios')

const APIKEY = "dfGEh0ZxCmcCs9D3T70URlxTe77aM%2FAVq%2F47cZb2gRko%2BxANXozELIoiMtAp92ANXucyBoEzbHvcMOYSXzzgDw%3D%3D"
let datalist;


const dataget = axios({
  method : 'get',
  url : 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson', 
    params: {
      serviceKey: decodeURIComponent(APIKEY),
      pageNo: 1,
      numOfRows: 10,
      startCreateDt: 20210910,
      endCreateDt: 20210911
    }
}).then(r => {
  console.log(r.data.response.body.items);

   const $ = cheerio.load(r.data.response.body.items, {xmlMode : true});

     $('item >').each((idx) => {
      let no1 = $('item >').find('accDefRate').text();
      let no2 = $('item >').find('accExamCnt').text();

      console.log(`console ${no1} / ${no2}`);
  })
})


