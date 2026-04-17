pipeline {
    agent any

      environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/allAboutManas/Single-region-CI-CD.git'
            }
        }

        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Artifact') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start Fake S3') {
            steps {
                sh 'nohup npm run fake-s3 > fake-s3.log 2>&1 &'
                sh 'sleep 5'
            }
        }

        stage('Upload Artifact') {
            steps {
                sh 'npm run upload-artifact'
            }
        }

        stage('Verify Artifact') {
            steps {
                sh 'npm run list-artifacts'
            }
        }

        stage('Deploy') {
            steps {
                sh 'bash scripts/deploy.sh ap-south-1'
            }
        }

        stage('Health Check') {
            steps {
                sh 'bash scripts/healthCheck.sh ap-south-1'
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}