//Page with login information;
//Script inputs chosen username, password and clicks the login button.

class LoginPage {
    get inputUsername () {return $('//input[@id="user-name"]');}
    get inputPassword () {return $('//input[@id="password"]');}
    get btnSubmit () {return $('//input[@id="login-button"]');}

    async login (username,password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();}}

export default new LoginPage();