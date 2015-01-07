'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:controller', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/controller') });
  }
});

module.exports = Generator;