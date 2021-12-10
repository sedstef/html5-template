# html5-template
Template for simple html5 projects

## get started
First you need NodeJs https://nodejs.org and gruntjs running https://gruntjs.com/getting-started

Download and install Nodejs 
Install gruntjs with npm
    
    npm install -g grunt-cli	
	npm install grunt --save-dev

If everthing is fine clone (or fork) this project open GIT-Bash change to the root-folder of this project and run

	grunt --force build

to execute the html-linter and the css-linter

## additional task
there is also a simple and very basic shell-script to execute apache-httpd as a docker container and mount the src dir as volume.
First install docker or docker-deskopt if you are on windows https://www.docker.com/get-started .
open start-httpd.cmd and change it to your needs.
run

    grunt run:httpd
    
open your browser and point it to http://localhost:8080
