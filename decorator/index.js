'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:decorator', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/decorator') });
  }
});

module.exports = Generator;