node {
  checkout scm
  stage('Install') {
    if (isUnix()) {
      sh "yarn install"
    } else {
      bat("yarn install")
    }
  }
  stage('Build') {
    if (isUnix()) {
      sh "npm run build"
    } else {
      bat("npm run build")
    }
  }
  stage('Test') {
    if (isUnix()) {
      sh "npm test"
    } else {
      bat("npm test")
    }
  }
  stage('Deploy') {
    echo 'Deploying....'
  }
}

