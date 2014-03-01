module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: 'source',
                    cssDir: 'source',
                    config: 'config.rb'
                }
            }
        },

        watch: {
            style: {
                files: ['source/**/*.scss'],
                tasks: ['compass:dist'],
                options: {
                    livereload: true               
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};