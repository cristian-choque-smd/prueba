const {write, click, inputfield, $, into, textBox} = require("taiko");

class LoginPage {
    async login (username, password) {
        await write(username, into(textBox({id: "email"})));
        await write(password, into(textBox({id: "password"})));
        //await click($("//button[@id='login-button']"));
        await click($("#login-button"));
    }
}
module.exports = new LoginPage();
