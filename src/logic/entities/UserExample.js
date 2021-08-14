/** @typedef {import("./ArticleExample").default} ArticleExample */

class UserExample {
  constructor({ username = "", password = "", articles = [] }) {
    /** @type {string} */
    this.username = username;
    /** @type {string} */
    this.password = password;
    /** @type {ArticleExample[]} */
    this.articles = articles;
  }
}

export default UserExample;
