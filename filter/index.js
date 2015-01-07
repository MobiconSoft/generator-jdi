'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:filter', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/filter') });
  }
});

module.exports = Generator;