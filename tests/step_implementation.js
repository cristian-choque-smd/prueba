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

step("Open page", async () => {
	await goto('https://beta.sharemedata.com/#/login');
});

step("Login with patient account", async function() {
	await write("cristian.ramiro.chl@gmail.com",into(textBox({id:"email"})));
	//await write("ch3ng3m3",into(textBox({name:"password"})));
	await write("ch3ng3m3",into(textBox({id:"password"})));

	await click($("#login-button"));
});

step("PopUp add patient", async function() {
	await click($("#header-option-add-patient"));
});

step("Create new patient", async function() {
	/*
	await write("cliente taiko",into($("#firstname-patient")));
	await focus($("#lastname-patient"));
	await write("apellido taiko",into($("#lastname-patient")));
	*/
	await write("zcristian",into(textBox({id:"firstname-patient"})));
    await write("Ramiro",into(textBox({id:"lastname-patient"})));
    await click($("#male-gender"));
    
	await click($("#date-month-selector"));	
    await click($("#d-month-1"));

	await click($("#date-day-selector"));
    await click($("#d-day-1"));
    
    await click($("#date-year-selector"));
    await click($("#d-year-2000"));
    
	await click(("Guardar"));

});

step("Exit from account", async function() {
	await goto('https://beta.sharemedata.com/#/account/home');
	await click($("#header-option-logout"));
	//await click(("SALIR"));
});
