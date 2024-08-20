pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/DaudCloud-sudo/Microservice-CI-CD-Pipeline.git'
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
                script {
                    echo 'Running Python tests for the backend'
                    bat 'python test_backend.py'
                }
            }
        }

        stage('Deploy Frontend and Backend') {
            steps {
                script {
                    echo 'Deploying frontend and backend services'
                    bat 'docker run -d -p 80:80 frontend:latest'
                    bat 'docker run -d -p 3000:3000 backend:latest'
                }
            }
        }
    }
}
