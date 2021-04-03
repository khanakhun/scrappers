const request = require('request-promise');
const cheerio = require('cheerio');
const { Parser } = require('json2csv');
const fs = require('fs');

let url ;
let results = [];
let nData = [];
let pagination = 7;

(async () => {

// async function getUrls(){

    const result  = await request.get( 'https://getlasso.co/niche/health-and-wellness/');
    const $ = await cheerio.load(result);

    // $('.programs').map(async (index,element)=>{

    //     const name = $(element).find('li h2 a').attr('href');
    //     console.log(name)
    
    // })

    
    $('.programs li').map(async (index,element)=>{
        const url = await $(element).find('a').attr('href');
        const name = await $(element).find('a').attr('href');
       console.log(name);
    })

    // const name = $('.lasso-container .lasso-title').text();
    // let url =$('.lasso-title').attr('href');
    // let commision =$('.lasso-description p:nth-child(2)').text().split(':')[1];
    // let description  =$('.lasso-description p:nth-child(1)').text();

    // console.log(name)
    // console.log(url)
    // console.log(commision)
    // console.log(description)


     // url = url.replace('https://getlasso.co/affiliate/','');
    // url = `https://${url}`;
    

// }
// getUrls();
// const Scrapper = async (url)=>{
//     const result  = await request.get(url);
//     const $ = await cheerio.load(result);
    
//   try{
   
//     let name = $('.heading').text().split('®')[0];
//     let imageUrl = $('.icon-zoom-in').attr('href');
//     let generic =$('[itemprop="description"]').text().split('®')[1];
//     let sku = $('.sku').text().split('SKU:')[1];
//     let category = $('.posted_in').text().split('Category:')[1];

//     let generalDetails = $('.panes .pane:nth-child(1)').html().trim();
//     let composotion = $('.panes .pane:nth-child(2)').html().trim();

//     let description = $('.panes .pane:nth-child(1) p:nth-child(1)').text().split('Description:')[1];
//     let sideEffect = $('.panes .pane:nth-child(1) p:nth-child(2)').text().split('Side effect:')[1];
//     let Contraindication = $('.panes .pane:nth-child(1) p:nth-child(3)').text().split('Contraindication:')[1];
//     let precautions = $('.panes .pane:nth-child(1) p:nth-child(4)').text().split('Precautions:')[1];
//     let storage = $('.panes .pane:nth-child(1) p:nth-child(5)').text().split('Storage:')[1];
//     let presentation = $('.panes .pane:nth-child(1) p:nth-child(6)').text().split('Presentation:')[1]

    
// nData.push({
//     name,
//     imageUrl,
//     generic,
//     sku,
//     category,
//     generalDetails,
//     composotion,
   
// })
//         const parser = new Parser
//         const csv = parser.parse(nData);
//         fs.writeFileSync('./webss1.csv', csv,'utf-8')
//         console.log(csv);

// }catch(err){
//     console.log(`Error is : ${err}`)
// }
// }

// for(var i = 1 ; i <= pagination; i++){
//     getUrls(i);
   
// }


})()
