module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmllint: {
            all: ['src/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-html');

    grunt.registerTask('default', ['htmllint']);

};