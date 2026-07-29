@Library("Jenkins-Git") _

pipeline {
    
    agent any

    stages{

        stage("git checkout from github"){
            steps{
                git(
                    url : "https://github.com/afrilaknaf/Kalles_ForntEnd.git",
                    branch: "main"
                )
            }
        }


        stage("Checkout file is exist"){
            steps{
                bat "echo Check the file package.json is exist or not"
                script{
                    if(fileExists("package.json")){
                        bat "echo package.json file is exists"
                    } else {
                        bat "echo there is no package.json file is not exists"
                    }
                }
            }
        }


        stage("Check the node js is installed"){
            steps{
                bat "echo check the node js version"
                bat """
                    npm -v
                    node -v
                """
            }
        }


        stage("Install the package in file"){
            steps{
                bat "echo Install Node module in package.json"
                bat """
                    npm install package.json
                """
            }
        }


        stage("Build the React Application"){
            steps{
                bat "echo Build the react Ecommerce App"
                bat "npm run build"
            }
        }


        stage("Check the folder is dist"){
            steps{
                bat "echo Check the build folder in react app"
                script{
                    if(fileExists("dist")){
                        bat "echo dist folder is exist in react app"
                    } else {
                        bat "echo dist folder is not avaibale in react app"
                    }
                }
            }
        }

        stage("Ariche folder Artifacts"){
            steps{
                archiveArtifacts artifacts: "dist/**"
            }
        }

        

    }


    post{
            success{
                emailpost(
                    Subject:"SUCCESS BUILD ${env.JOB_NAME} and ${env.BUILD_NUMBER}",
                    Body: """
                    <h1>SUCCESS BUILD IN JENKINS</h1>
                    <b>JOB NAME:</b> ${env.JOB_NAME},
                    <b>BUILD NUMBER:</b> ${env.BUILD_NUMBER}
                    <b>BUILD URL:</b> ${env.BUILD_URL}
                    """,
                    Useremail:"afrilaknaf85@gmail.com"
                )
            }


            failure{
                emailpost(
                    Subject:"FAILURE BUILD ${env.JOB_NAME} and ${env.BUILD_NUMBER}",
                    Body: """
                    <h1>FAILURE BUILD IN JENKINS</h1>
                    <b>JOB NAME:</b> ${env.JOB_NAME},
                    <b>BUILD NUMBER:</b> ${env.BUILD_NUMBER}
                    <b>BUILD URL:</b> ${env.BUILD_URL}
                    """,
                    Useremail:"afrilaknaf85@gmail.com"
                )
            }


            aborted{
                emailpost(
                    Subject:"Aborted  BUILD ${env.JOB_NAME} and ${env.BUILD_NUMBER}",
                    Body: """
                    <h1>Aborted BUILD IN JENKINS</h1>
                    <b>JOB NAME:</b> ${env.JOB_NAME},
                    <b>BUILD NUMBER:</b> ${env.BUILD_NUMBER}
                    <b>BUILD URL:</b> ${env.BUILD_URL}
                    """,
                    Useremail:"afrilaknaf85@gmail.com"
                )
            }
        }
}