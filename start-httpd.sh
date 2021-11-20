#!/bin/bash

docker run --rm --name html5-template -p 8080:80 -v "$PWD/src":/usr/local/apache2/htdocs/ httpd:2.4
