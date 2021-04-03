const request = require("request-promise");
const cheerio = require("cheerio");
const { Parser } = require("json2csv");
const fs = require("fs");
let url;
let results = [];
let nData = [];
let pagination = 7;

// (async () => {
//   const result = await request.get("https://coinmarketcap.com/");
//   const $ = await cheerio.load(result);
//   $(".tableWrapper___3utdq table tbody").map(async (i, element) => {
//     const data = $(element).find(`tr`).text();
//     nData = data;
//   });
//   console.log(nData);
// })();

// Coingego Scrapperr

// (async () => {
//   const result = await request.get("https://www.coingecko.com/en");
//   const $ = await cheerio.load(result);

//   $(".table > tbody > tr").map(async (i, element) => {
//     const data = $(element).find(`tr`).text();
//     Main($(element));
//   });

//   function Main(ele) {
//     const index = ele.find("td:nth-child(2)").text().trim();
//     const coin = ele.find("td:nth-child(3)").text().trim();
//     const price = ele.find("td:nth-child(4)").text().trim();
//     const oneHour = ele.find("td:nth-child(5)").text().trim();
//     const twnetyFourDays = ele.find("td:nth-child(6)").text().trim();
//     const sevenDays = ele.find("td:nth-child(7)").text().trim();
//     const volume = ele.find("td:nth-child(8)").text().trim();
//     const mktCape = ele.find("td:nth-child(9)").text().trim();
//     nData.push({
//       index,
//       coin,
//       price,
//       oneHour,
//       twnetyFourDays,
//       sevenDays,
//       volume,
//       mktCape,
//     });
//     const parser = new Parser();
//     const csv = parser.parse(nData);
//     fs.writeFileSync("./coingCrypto1.csv", csv, "utf-8");
//     console.log(csv);
//   }
// })();

(async () => {
  const result = await request.get("https://vfat.tools/bsc/");
  const $ = await cheerio.load(result);

  const data = $(".container").text();

  nData.push({
    data,
  });
  const parser = new Parser();
  const csv = parser.parse(nData);
  fs.writeFileSync("./cryptoData.csv", csv, "utf-8");
  console.log(csv);
})();
