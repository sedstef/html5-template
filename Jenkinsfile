#!/usr/bin/env groovy

/**
 * Jenkins Pipeline Groovy script
 */

node{
    stage('Prepare'){
        checkout scm
    }
    
    stage('Build'){
        /* Requires the Docker Pipeline plugin to be installed */
        docker.withTool('Default'){
            configFileProvider([configFile(fileId: 'b56b9c91-0063-46b2-9686-e896a96458ae', variable: 'DOCKERSERVER')]) {
                docker.withServer(readFile(DOCKERSERVER)){
                    docker.image('node:12-alpine').inside {
                        sh 'npm install -g grunt-cli'
                        sh 'grunt build'
                    }
                }
            }
        }
    }
}