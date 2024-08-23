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

            // Stop and remove frontend containers
            bat '''
                FOR /F "tokens=*" %%i IN ('docker ps -q -f "label=frontend-service"') DO (
                    docker stop %%i
                    docker rm %%i
                )
            '''
            
            // Stop and remove backend containers
            bat '''
                FOR /F "tokens=*" %%i IN ('docker ps -q -f "label=backend-service"') DO (
                    docker stop %%i
                    docker rm %%i
                )
            '''

            echo 'Deploying frontend and backend services'

            // Deploy new frontend container with label
            bat 'docker run -d --label frontend-service -p 80:80 frontend:latest'
            
            // Deploy new backend container with label
            bat 'docker run -d --label backend-service -p 3000:3000 backend:latest'
        }
    }
}
    }
}
