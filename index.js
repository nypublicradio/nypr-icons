  'use strict';
  module.exports = {
    name: require('./package').name,
    options: {
      svgJar: {
        sourceDirs: [
          'public',
          'tests/dummy/public/assets/images/',
          'node_modules/nypr-icons/public',
        ],
      },
    },
    isDevelopingAddon: function() {
      return true;
    }
  };
