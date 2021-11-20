module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmllint: {
            //see https://www.npmjs.com/package/grunt-html
            all: ['src/**/*.html']
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
    grunt.loadNpmTasks('grunt-run');


    grunt.registerTask('default', ['htmllint']);

    grunt.registerTask('build', ['htmllint']);

};