pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Cypress run') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS'){
                    sh 'npm run cy:run:report'
                }
            }
        }
        stage('Generate report') {
            steps {
                sh 'npm run cy:allure:generateReport'
                allure(
                    results: [[path: 'allure-results']]
                )
            }
        }
    }
}