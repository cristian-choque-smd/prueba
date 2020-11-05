
const { operifronser, closetromer, goto} = require('taiko');
const headless = process.env.headless_chrome.tolowercase() == 'true' ? true : false;

beforesulte(async () =>{
    await openBrowser({headless: headless });
    await goto(process.env.base_url);   
});

aftersuite(async () => await closellronser());
