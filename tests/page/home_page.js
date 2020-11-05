const {$} = require('taiko');
class HomePage {
    async getProfileName (){
        return await ($("//div[@class='user-detail']")).text();
    }
}
module.exports = new HomePage();