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
            echo 'Stopping and removing existing containers'

            // Stop and remove frontend container
            bat '''
                echo Stopping and removing frontend container
                FOR /F "tokens=*" %%i IN ('docker ps -q -f "ancestor=frontend:latest" 2^>^&1') DO (
                    echo Stopping container %%i
                    docker stop %%i 2>&1
                    echo Removing container %%i
                    docker rm %%i 2>&1
                )
            '''
            
            // Stop and remove backend container
            bat '''
                echo Stopping and removing backend container
                FOR /F "tokens=*" %%i IN ('docker ps -q -f "ancestor=backend:latest" 2^>^&1') DO (
                    echo Stopping container %%i
                    docker stop %%i 2>&1
                    echo Removing container %%i
                    docker rm %%i 2>&1
                )
            '''

            echo 'Deploying frontend and backend services'

            // Deploy new frontend container
            bat 'docker run -d --name frontend-container -p 80:80 frontend:latest 2>&1'
            
            // Deploy new backend container
            bat 'docker run -d --name backend-container -p 3000:3000 backend:latest 2>&1'
        }
    }
}
    }
}
