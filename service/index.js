'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:service', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/service') });
  }
});

module.exports = Generator;