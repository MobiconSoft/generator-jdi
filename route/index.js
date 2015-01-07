'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('jdi-component:route', {arguments: this.arguments}, { local: require.resolve('generator-jdi-component/route') });
  }
});

module.exports = Generator;