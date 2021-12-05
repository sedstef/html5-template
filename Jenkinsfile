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
            docker.withServer('tcp://192.168.4.10:2375') {
                docker.image('node:12-alpine').inside {
                    sh 'npm install -g grunt-cli'
                    sh 'grunt build'
                }
            }
        }
    }
}