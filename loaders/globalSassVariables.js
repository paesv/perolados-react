// const $ = require('jquery');

// console.log($(location).attr('href'));

module.exports = function (source) {
    this.cacheable();
    return `@import './src/assets/config.scss';
      ${source}`;
}