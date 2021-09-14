const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios')

const APIKEY = "dfGEh0ZxCmcCs9D3T70URlxTe77aM%2FAVq%2F47cZb2gRko%2BxANXozELIoiMtAp92ANXucyBoEzbHvcMOYSXzzgDw%3D%3D"
let datalist;

// const api_url = url + '?ServiceKey=' + APIKEY + '&pageNo=1&numOfRows=10&&pageNo=1&numOfRows=10&startCreateDt=20210910&endCreateDt=20210911=20210910&endCreateDt=20210911';
// const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
const $api_url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?ServiceKey=dfGEh0ZxCmcCs9D3T70URlxTe77aM%2FAVq%2F47cZb2gRko%2BxANXozELIoiMtAp92ANXucyBoEzbHvcMOYSXzzgDw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210910&endCreateDt=20210911'
    request($api_url, (err, res, body) => {

        const $ = cheerio.load(body);


            $('item').each((idx) => {
                let no1 = $(this).find('resultCode').text();
                let no2 = $(this).find('resultMsg').text();

                console.log(`console ${no1} / ${no2}`)

            })

    })
