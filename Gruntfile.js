module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dev: {
                options: {
                    sassDir: 'source',
                    cssDir: 'source/static',
                    config: 'config.rb'
                }
            }
        },

        watch: {
            sass: {
                files: ['source/main.scss', 'source/**/style/*.scss'],
                tasks: ['compass:dev'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', 'Server with Compass and Livereload', function () {
        grunt.task.run('connect', 'watch');
    });
};