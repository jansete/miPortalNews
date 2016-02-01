module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    cssmin: {
      css: {
        options :{
          noAdvanced: true
        },
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },
    watch: {
      files: ['scss/**/*.scss'],
      tasks: ['compass', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'compass',
    'cssmin'
  ]);
};