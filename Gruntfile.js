'use strict';

module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // grunt.log.debug('Reading file ...');
    var dataFile = require('./www/js/data/gwoe-indicators-data.js');
    // grunt.log.debug('Result, Goals: ' + dataFile.Data.indicators.structure.goals);

    var base = 'www/';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            livereload: {
                files: ['**/*.html', '**/*.css', '**/*.js']
            },
            sass: {
                files: '**/*.s[ac]ss',
                tasks: ['sass:dev']
            },
            // TODO: not called from grunt
            dusthtml: {
                files: ['www/js/templates/indicatorPagesTemplate.html', 'www/js/data/gwoe-indicators-data.js'],
                tasks: ['dusthtml:dist']
            },
            // TODO: not called from grunt
            includes: {
                files: ['www/js/templates/index.html'],
                tasks: ['includes']
            }
        },
        sass: {                              // Task
            dev: {                             // Another target
                options: {                       // Target options
                    style: 'expanded',
                    trace: true
                    /* lineNumbers: true */
                },
                files: {
                    'www/css/main.css': base + '/sass/main.scss'
                }
            }
        },
        dusthtml: {
            dist: {
                src: 'www/js/templates/indicatorPagesTemplate.html',
                dest: 'www/js/templates/indicatorPagesTemplate-output.html',

                options: {
                    module: 'dustjs-helpers',
                    context: dataFile.Data.indicators
                }
            }
        },
        includes: {
            files: {
                cwd: 'www/js/templates/',
                src: ['index.html'], // Source files
                dest: 'www/', // Destination directory
                flatten: false,
                options: {
                    includePath: 'www/js/templates/'
                }
            }
        }
    });
    grunt.registerTask('default', [
        'sass', 'watch'
    ]);
    grunt.registerTask('build', [
        'dusthtml'
    ]);
    grunt.registerTask('html', [
        'includes'
    ]);
};
