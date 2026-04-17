pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/allAboutManas/Single-region-CI-CD.git'
            }
        }

            stage('Check Node Version') {
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

        stage('Deploy to ap-south-1') {
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
            echo 'Single region deployment completed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}


