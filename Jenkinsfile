pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install
cd client && npm install
cd ../server && npm install'''
      }
    }

  }
}