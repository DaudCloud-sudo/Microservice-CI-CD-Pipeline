# CI/CD Microservices Pipeline Using Jenkins and Docker

## Project Description

I built a CI/CD pipeline for microservices using Jenkins and Docker, separating the app into frontend and backend services. This project helped me improve my skills in Git, GitHub, Jenkins, and Docker by integrating continuous testing, versioning, and deployment.

## Outcome

I successfully:

- Initialized the Git and GitHub repo.
- Created a CI/CD pipeline with Jenkins.
- Dockerized microservices for deployment.
- Linked GitHub with Jenkins for automation.
- Developed a basic understanding of creating APIs and connecting them with the frontend.
- Gained confidence in DevOps practices.

This project equipped me with essential skills and experience that will be valuable for real-world DevOps and software development environments.

### Workflow

1. Set up Git and GitHub.
2. Build the frontend with HTML, CSS, and JavaScript.
3. Create a Node.js API that returns JSON and connect it with the frontend.
4. Containerize the application using Docker.
5. Test locally: access the frontend via `localhost` and the API via `localhost:3000/data`.
6. Automate the entire process using Jenkins.

---

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [Tools and Technologies](#tools-and-technologies)
3. [Setup and Installation](#setup-and-installation)
   - Installing Jenkins
   - Installing Docker
   - Installing Required Jenkins Plugins
4. [Microservices Structure](#microservices-structure)
   - Initializing the Git and GitHub Repo
   - Frontend Service (HTML, CSS, JavaScript)
   - Backend Service (Node.js)
   - Finalizing and Pushing Changes to GitHub
5. [CI/CD Pipeline Implementation](#ci-cd-pipeline-implementation)
   - Jenkins Configuration
   - Jenkinsfile Explained
   - Docker Integration
6. [Testing and Validation](#testing-and-validation)
   - Automated Testing with Jest (Backend)
   - Testing in Docker Containers
7. [Deployment](#deployment)
   - Dockerized Microservices on Windows
   - Running the Pipeline in Jenkins
8. [Project Outcome](#project-outcome)

---

## 1. Project Architecture

Image to add.

## 2. Tools and Technologies

For this project, I used the following tools and technologies:

- **Jenkins**: For automating the CI/CD pipeline.
- **Docker**: For containerizing the application and managing microservices.
- **Git**: For version control and repository management.
- **GitHub**: For hosting the source code and Jenkins pipeline.
- **Node.js**: For the backend microservice.
- **HTML/CSS/JavaScript**: For the frontend microservice.
- **Python `unittest`**: For automated testing of the backend microservice.

## 3. Setup and Installation

Follow these steps to set up and install the required tools:

### Installing Jenkins

1. Download Jenkins from the [official Jenkins website](https://www.jenkins.io/download/).
2. Run the installer and follow the on-screen instructions to complete the installation.
3. Open Jenkins in your web browser at `http://localhost:8080` and follow the prompts to retrieve the initial admin password.

![image](https://github.com/user-attachments/assets/d72069b7-260f-4b67-a1b6-22a602c675d0)

### Installing Docker

1. Download Docker Desktop from the [Docker website](https://www.docker.com/products/docker-desktop).
2. Run the installer and follow the instructions to complete the installation.
3. After installation, open Docker Desktop and ensure it's running.

![image](https://github.com/user-attachments/assets/32d1de70-0f5f-4aae-85a9-fac1ced91904)

### Installing Required Jenkins Plugins

1. Open Jenkins in your web browser.
2. Go to **Manage Jenkins** > **Manage Plugins**.
3. In the **Available** tab, search for and install the following plugins:
   - **Docker Pipeline**
   - **Git**
   - **Pipeline**
4. After installation, restart Jenkins to ensure the plugins are loaded.

![image](https://github.com/user-attachments/assets/d72efb2a-451e-4bbc-9f48-1787b6aa0ad0)

## 4. Microservices Structure

- **Initializing the Git and GitHub Repo**
  - Went to GitHub and created a new repository (e.g., `microservice-cicd`).
  - Initialized it with a `README.md` file.
  - Cloned it to the local machine using Git.

![image](https://github.com/user-attachments/assets/bd683bd4-a0a5-4a0e-bb05-b27b754a59a6)

- **Frontend Service (HTML, CSS, JavaScript)**
  - Developed a responsive frontend using HTML, CSS, and JavaScript.
  - The frontend connects to the backend service through RESTful APIs.

![image](https://github.com/user-attachments/assets/8e435aca-c8da-49b4-9747-fa03b85e1bce)

- **Backend Service (Node.js)**
  - Built a backend service using Node.js and Express to handle API requests.
  - The backend processes data and communicates with the frontend.

![image](https://github.com/user-attachments/assets/e0fe9b76-3bcd-427e-8e40-96472e41fa02)
![image](https://github.com/user-attachments/assets/36ae324d-99c3-445c-b888-5a6eae8c5d1e)

- **Finalizing and Pushing Changes to GitHub**
  - Committed the final changes to the local Git repository with a descriptive message.
  - Pushed the committed changes to the GitHub repository, ensuring the latest updates are reflected.
  - Updated the README file with the final project details, including steps, screenshots, and outcomes.

![image](https://github.com/user-attachments/assets/0ff6c5b8-67d1-40d2-94dd-c803b2244307)

## 5. CI/CD Pipeline Implementation

- **Jenkins Configuration**
  - Configured Jenkins for continuous integration and deployment.
  - Set up Jenkins on Docker to automate the build, test, and deployment processes.

- **Jenkinsfile Explained**
  - Created a Jenkinsfile to define the pipeline stages: Checkout, Build, Test, and Deploy.
  - Integrated Jenkins with GitHub to trigger builds on code commits.

- **Docker Integration**
  - Dockerized both frontend and backend services for consistent environments across development and testing.
  - Used Docker Compose to manage multi-container applications.

![CI/CD Pipeline Implementation](path/to/cicd-pipeline-screenshot.png)

## 6. Testing and Validation

For automated testing of the backend microservice, I used Python’s `unittest` module. This module provides a framework for writing and running tests, which helps ensure that the backend code functions correctly.

- **Basic Example of `unittest` in Python**

Here's how I used `unittest` to test the backend microservice:

![image](https://github.com/user-attachments/assets/b61c4a8d-f734-4b44-9a52-cb4986fcfe43)

Code is available in the Backend folder with the name `test_backend.py`.

- **Testing in Docker Containers**
  - Ran tests within Docker containers to validate functionality in isolated environments.
  - Automated the testing process as part of the Jenkins CI/CD pipeline.

![Testing and Validation](path/to/testing-validation-screenshot.png)

## 7. Deployment

- **Dockerized Microservices on Windows - Manual Test of Docker container**
  - Build Docker Images:
    - Created the Docker image for the frontend and backend using the Dockerfile in the `frontend` and `backend` directory.
    ```bash
    cd frontend
    docker build -t frontend:latest .
    ```
    ```bash
    cd ../backend
    docker build -t backend:latest .
    ```
    
 - **Run Docker Containers**:
    - Launched the frontend container in detached mode, mapping port 80 of the container to port 80 on the host.
    - Launched the backend container in detached mode, mapping port 3000 of the container to port 3000 on the host.
    ```bash
    docker run -d -p 80:80 frontend:latest
    ```
    ```bash
    docker run -d -p 3000:3000 backend:latest
    ```

   - **Verify Running Containers**:
    - Verified that both frontend and backend containers were running by listing active containers.
    ```bash
    docker ps
    ```

 - **Access Applications**:
    - **Frontend**: Opened a browser and navigated to `http://localhost` to view the frontend microservice.
    - **Backend**: Navigated to `http://localhost:3000/data` to view the backend microservice's JSON response.

 - **Commit and Push Dockerfiles**:
    - Committed and pushed Dockerfiles to the repository for version control.

- **Running the Pipeline in Jenkins - Automated Test to Build and Deploy**
  - Successfully executed the CI/CD pipeline in Jenkins.
  - Deployed updates automatically to the Dockerized environment upon code changes.

![Deployment](path/to/deployment-screenshot.png)

## 8. Project Outcome

- Achieved a fully automated CI/CD pipeline that builds, tests, and deploys microservices.
- Deployed a robust microservices architecture using Docker and Jenkins.
- Gained practical experience in Git, GitHub, Jenkins, Docker, and microservices architecture.

![Project Outcome](path/to/project-outcome-screenshot.png)

## Conclusion

This project gave me a comprehensive understanding of DevOps practices, microservices, Docker, and Jenkins. I learned to automate the build, test, and deployment processes effectively, preparing me for real-world software development and DevOps roles.

