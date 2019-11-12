  'use strict';
  const Funnel = require('broccoli-funnel');
  const mergeTrees = require('broccoli-merge-trees');
  const join = require('path').join;

  module.exports = {
    name: require('./package').name,

    treeForPublic: function() {
      const imagesDir = new Funnel(join(this.root, 'public'), {
        include: ['**/*'],
        destDir: 'public'
      });

      return mergeTrees([imagesDir]);
    },

    included: function(app) {
       let { svgJar = {} } = app.options;
       if (!svgJar.sourceDirs) {
         svgJar.sourceDirs = [];
       }

       svgJar.sourceDirs.push('./public/images/icons');
       this._super.included.apply(this, arguments);
     },

    isDevelopingAddon: function() {
      return true;
    }
  };
