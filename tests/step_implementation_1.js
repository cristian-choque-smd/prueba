/* globals gauge*/
"use strict";
const { openBrowser, write, closeBrowser, goto, press, screenshot, text, focus, textBox, toRightOf, click, $, into, dropDown} = require('taiko');

const assert = require("assert");
const path = require("path");
const headless = process.env.headless_chrome.toLowerCase() === 'false';


beforeSuite(async () => {
	await openBrowser({ headless: headless });
	//await openBrowser({ headless: headless });
});

afterSuite(async () => {
    await closeBrowser();
});

step("Search by patient", async function() {
    await click($("#header-option-patients"));

    await write("zcristian",into(textBox({placeholder:"Nombre"})));
    
    await click($("#patient-list-see"));
    
    
});

step("Delete patient", async function() {
    
	await click("Editar información",{ navigationTimeout: 3000});
    await click("Eliminar");
    //await click("Eliminar");
    //goto("url",{timeout:60000})
    // esto es un cambio
});