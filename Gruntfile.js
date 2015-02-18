module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'public/', src: '**', dest: 'build/' },
                    { src: 'lib/angular/angular.min.js*', dest: 'build/' },
                    { src: 'lib/angular-route/angular-route.min.js*', dest: 'build/' },
                    { src: 'lib/angular-resource/angular-resource.min.js*', dest: 'build/' },
                    { src: 'lib/angular-bootstrap/ui-bootstrap-tpls.min.js*', dest: 'build/' },
                    { src: 'lib/bootstrap/dist/**', dest: 'build/' },
                    { src: 'lib/jquery/dist/**', dest: 'build/' }
                ]
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            main: {
                expand: true,
                cwd: 'src/js',
                src: '**/*.js',
                dest: 'build/lib/help-app/js'
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            main: {
                expand: true,
                cwd: 'src/css',
                src: '**/*.css',
                dest: 'build/lib/help-app/css'
            }
        },
        injector: {
            options: {
                min: true,
                ignorePath: 'build',
                bowerPrefix: 'bower:'
            },
            local_dependencies: {
                files: {
                    'build/index.html': [
                        'build/lib/help-app/**/*.css',
                        'build/lib/help-app/js/app.js',
                        'build/lib/help-app/js/app-router.js',
                        'build/lib/help-app/js/app-run.js',
                        'build/lib/help-app/js/controller/*.js',
                        'build/lib/help-app/js/services/*.js'
                    ]
                }
            },
            bower_dependencies: {
                files: {
                    'build/index.html': ['bower.json'],
                }
            }
        },
        htmlmin: {
            main: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'build/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-asset-injector');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'injector', 'htmlmin']);

}
