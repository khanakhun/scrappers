const request = require("request-promise");
const cheerio = require("cheerio");
const axios = require("axios");
const { Parser } = require("json2csv");
const fs = require("fs");
let url;
let results = [];
let nData = [];
let pagination = 7;

(async () => {
  try {
    const response = await axios.get(
      "https://www.nationalmortgagenews.com/news/top-mortgage-producers-2020-full-rankings"
    );

    const $ = await cheerio.load(response.data);

    // $(".RichTextBody table tbody").map(async (i, element) => {
    //   const data = $(element).find(`tr`).text();
    //   nData = data;
    // });
    $(".RichTextBody > table > tbody > tr").each(async (index, element) => {
      Scrape($(element));
    });

    console.log(nData);
  } catch (error) {
    console.error(error);
  }

  function Scrape(ele) {
    const name = ele.find("td:nth-child(2)").text();
    const company = ele.find("td:nth-child(3)").text();
    const volume = ele.find("td:nth-child(4)").text();
    const numberofloan = ele.find("td:nth-child(5)").text();
    nData.push({
      name,
      company,
      volume,
      numberofloan,
    });
    const parser = new Parser();
    const csv = parser.parse(nData);
    fs.writeFileSync("./mortage-2020.csv", csv, "utf-8");
    console.log(csv);
  }
})();
