module.exports = function (source) {
    this.cacheable();
    return `@import './src/assets/config.scss';
      ${source}`;
}