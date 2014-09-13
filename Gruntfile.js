module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    'assets/css/main.css': 'less/index.less'
                }
            }
        },

        copy: {
            'font-awesome': {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['bower_components/font-awesome/fonts/*'],
                        dest: 'assets/fonts/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        uglify: {
            dist: {
                files: {
                    'assets/js/dependencies.js': [
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/bootstrap/dist/js/bootstrap.min.js'
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less:development'],
                options: {
                    spawn: false,
                },
            },
        }

    });

    // Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Tasks
    grunt.registerTask('default', ['copy', 'uglify', 'less']);
};