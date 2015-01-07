'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:factory', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/factory') });
  }
});

module.exports = Generator;