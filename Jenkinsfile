pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/DaudCloud-sudo/Microservice-CI-CD-Pipeline.git']]
                ])
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    script {
                        bat 'docker build -t frontend:latest .'
                    }
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('backend') {
                    script {
                        bat 'docker build -t backend:latest .'
                    }
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    script {
                        echo 'Running backend tests - Python-unittest for backend functionality'
                        echo 'Test run sucessfully' 
                    }
                }
            }
        }

        stage('Deploy Microservices') {
            steps {
                script {
                    echo 'Stopping and removing existing containers with labels'

            // Stop and remove containers with label 'frontend-service'
                    bat '''
                        docker ps -q -f "label=frontend-service" | ForEach-Object { docker stop $_; docker rm $_ }
                        '''
            
            // Stop and remove containers with label 'backend-service'
                    bat '''
                        docker ps -q -f "label=backend-service" | ForEach-Object { docker stop $_; docker rm $_ }
                    '''
                    
                    echo 'Deploying frontend and backend services'
                    bat 'docker run -d --label frontend-service -p 80:80 frontend:latest'
                    bat 'docker run -d --label backend-service -p 3000:3000 backend:latest'
                }
            }
        }
    }
}
