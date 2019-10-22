module.exports = class Afb {
  constructor() {
    // ログインページURL
    this.loginUrl ='https://www.afi-b.com';
    // 入力項目
    this.usernameBox = 'input[name="login_name"]';
    this.passwordBox = 'input[name="password"]';
    this.searchBox = 'input[name="pm_search"]';
    // ボタン
    this.loginButton = '#pageTitle > aside.m-grid__itemOrder--01.m-gheader__loginForm > g-header-loginform > div.m-form__wrap > form > div > div.m-gLoginGlid__btn > m-btn > div > input';
    this.searchButton = 'input[type="submit"]';
    // 取得項目
    this.selector = '#pagination > div.pagination.clearFix > span > span';
  }

  /**
   * 取得できた件数を返す
   *
   * @param text
   * @returns int
   */
  formatForResponse(text) {
    return parseInt(text);
  }
};