const request = require('request-promise');
const cheerio = require('cheerio');
const { Parser } = require('json2csv');
const fs = require('fs');

let url ;
let results = [];
let nData = [];
let pagination = 7;

(async () => {

async function getUrls(index){

    const result  = await request.get( `https://hamdard.com.bd/our-products/page/${index}/`);
    const $ = await cheerio.load(result);

    $('.product_boxes div.featured_image').map(async (index,element)=>{
        const url = await $(element).find('a').attr('href');
        await Scrapper(url);
    })

    

}
const Scrapper = async (url)=>{
    const result  = await request.get(url);
    const $ = await cheerio.load(result);
    
  try{
   
    let name = $('.heading').text().split('®')[0];
    let imageUrl = $('.icon-zoom-in').attr('href');
    let generic =$('[itemprop="description"]').text().split('®')[1];
    let sku = $('.sku').text().split('SKU:')[1];
    let category = $('.posted_in').text().split('Category:')[1];

    let generalDetails = $('.panes .pane:nth-child(1)').html().trim();
    let composotion = $('.panes .pane:nth-child(2)').html().trim();

    let description = $('.panes .pane:nth-child(1) p:nth-child(1)').text().split('Description:')[1];
    let sideEffect = $('.panes .pane:nth-child(1) p:nth-child(2)').text().split('Side effect:')[1];
    let Contraindication = $('.panes .pane:nth-child(1) p:nth-child(3)').text().split('Contraindication:')[1];
    let precautions = $('.panes .pane:nth-child(1) p:nth-child(4)').text().split('Precautions:')[1];
    let storage = $('.panes .pane:nth-child(1) p:nth-child(5)').text().split('Storage:')[1];
    let presentation = $('.panes .pane:nth-child(1) p:nth-child(6)').text().split('Presentation:')[1]

    
nData.push({
    name,
    imageUrl,
    generic,
    sku,
    category,
    generalDetails,
    composotion,
   
})
        const parser = new Parser
        const csv = parser.parse(nData);
        fs.writeFileSync('./webss1.csv', csv,'utf-8')
        console.log(csv);

}catch(err){
    console.log(`Error is : ${err}`)
}
}

for(var i = 1 ; i <= pagination; i++){
    getUrls(i);
   
}


})()
