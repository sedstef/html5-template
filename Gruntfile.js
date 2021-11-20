module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmllint: {
            //see https://www.npmjs.com/package/grunt-html
            all: ['src/**/*.html']
        },
        csslint: {
            //see https://github.com/gruntjs/grunt-contrib-csslint
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                options: {
                    import: 2
                },
                src: ['src/**/*.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['src/**/*.css']
            }
        },
        run: {
            //see https://www.npmjs.com/package/grunt-run
            httpd: {
                cmd: './start-httpd.sh',
//                args: [
//                    'arg1',
//                    'arg2'
//                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-run');


    grunt.registerTask('default', ['htmllint', 'csslint']);

    grunt.registerTask('build', ['htmllint']);

};