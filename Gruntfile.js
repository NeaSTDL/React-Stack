var path = require("path");
var wpconfig = require("./webpack.config.js");

module.exports = function(grunt) {

  grunt.initConfig({
    // Check over syntax for JSX files
    eslint: {
      js6:{
        src: ["src/**"]
      }
    },
    // Check over syntax for JS files
    jshint: {
      js5: {
        files: {
          src: ['Gruntfile.js', 'webpack.config.js', 'test/**/*.js']
        },
        options: {}
      },
      js6: {
        files: {
          src: ['src/**']
        },
        options: {
          jshintrc: '.jshintrc',
          ignores: [],
          additionalSuffixes: ['.js']
        }
      }
    },
    // Compile stylus files to CSS
    stylus: {
      compile: {
        files: [{
          expand: true,
          cwd: 'static/lib/stylus',
          src: ['*.styl', '**/*.styl'],
          dest: 'build/client/css',
          ext: '.css'
        }]
      }
    },
    // Watch for changes on files
    watch: {
      // For stylus, compile them on change
      stylus: {
        files: ['static/lib/stylus/**'],
        tasks: ['stylus:compile']
      },
      // For js5, check their syntax
      js5:{
        files: ['<%= jshint.js5.files.src %>'],
        tasks: ['jshint:js5'] 
      },
      // FOr js6, check their syntax
      js6:{
        files: ['<%= jshint.js6.files.src %>'],
        tasks: ['jshint:js6'] 
      }
    },
    // Sets up the Webpack Development Server
    "webpack-dev-server":{
      start: {
        contentBase: wpconfig.devServer.contentBase,
        webpack: {
          entry: wpconfig.entry,
          output: wpconfig.output,
          module: wpconfig.module
        },
        keepalive: true
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-webpack');

  // Register tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['stylus']);
  grunt.registerTask('devserver', ["webpack-dev-server"]);

};
