const {write, click, inputfield, $, into, textBox} = require("taiko");

class LoginPage {

	async funcion1 (username, password) {
        await write(username, into(textBox({id: "email"})));
        await write(password, into(textBox({id: "password"})));
        //await click($("//button[@id='login-button']"));
        await click($("#login-button"));
    }
    
    async funcion2 (username, password) {

        await write(username, into(textBox({id: "email"})));
        await write(password, into(textBox({id: "password"})));
        //await click($("//button[@id='login-button']"));
        await click($("#login-button"));
    }


    
}
module.exports = new LoginPage();
