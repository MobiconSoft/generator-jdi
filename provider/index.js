'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:provider', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/provider') });
  }
});

module.exports = Generator;