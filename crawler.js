const fs = require('fs');
const puppeteer = require('puppeteer');

// let title = new Array();
// let artists = new Array();

const crawler = async() => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://vibe.naver.com/artist/331653/tracks');
    
    // 총 곡 수 가져오기
    let totalNum = await page.$('#content > div > div.track_wrap > div.track_section > div.select_all > div.text_area > div > span > span');
    if(totalNum) {
        const totalNums = await page.evaluate((tag) => tag.textContent, totalNum);
        console.log(totalNums);
    }

    let title = await page.$$('div.track_wrap .song .inner_cell');
    console.log(title.length);
    // if(title) {
    //     const titles = await page.evaluate((tag) => tag.textContent, title);
    //     console.log(titles);
    // }


    // const datas = [];
    // for(let i = 0; i < totalNum; i++) {
    //     let data = {};
    //     let title = await page.$('#content > div > div.track_wrap > div.track_section > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.song > div.title_badge_wrap > span > a');
    //     data.title = await page.evaluate((tag) => tag.textContent, title);
    //     console.log(data.title); 
    //     // data.text = await page.evaluate((el) => {
    //     //     const text = el.textContent
    //     // })
    //     datas.push(data);
    // }
    // console.log(datas);

    // 총 곡 수 가져오기 - page.evaluate()
    // const text = await page.evaluate(() => {
    //     const totalNum = document.querySelector('#content > div > div.track_wrap > div.track_section > div.select_all > div.text_area > div > span > span');
    //     return totalNum.textContent;
    // });

    // if(text) {
    //     console.log(`totalNum은 : ${text}`);
    // }




    // let data = [];

    // for(let i = 0; i < 10; i++) {
    //     await page('https://vibe.naver.com/artist/331653/tracks');
    //     data.push(await getAll(page));
    // }

    // console.log(data);

    // const scoreEl = await page.$('.score.score_left .star_score'); // 페이지에서 태그 찾기 
    //             if (scoreEl) {
    //                 const text = await page.evaluate((tag) => tag.textContent, scoreEl);
    //                 console.log(r[0], '평점', text.trim());
    //             }

    await page.close();
    await browser.close();
}

// async function getAll(page) {
//     let data = [];

//     const number = await page.
// }

crawler();