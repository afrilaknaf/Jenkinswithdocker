pipeline {
    agent any

        environment{
            Image_Name="afrilaknaf036/ecommerce"
            Version="${env.BUILD_NUMBER}"
        }


        stages{
            stage("Git Checkout"){
                steps{
                    git(
                        url:"https://github.com/afrilaknaf/Jenkinswithdocker.git",
                        branch:"main"
                    )
                }
            }



            stage("Install"){
                steps{
                    sh "npm install"
                }
            }


            stage("Docker Build"){
                steps{
                    sh "docker build -t ${env.Image_Name}:${env.Version} ."
                }
            }


            stage("Check the image"){
                steps{
                    sh "docker ps -a"
                }
            }


            stage("Docker login"){
                steps{
                    withCredentials([
                        usernamePassword(
                            credentialsId:"Docker_Account",
                            usernameVariable:"USER",
                            passwordVariable:"PASSWORD"
                        )
                    ]) {
                        sh """
                        echo $PASSWORD | docker login -u $USER --password-stdin
                        """
                    }
                }
            }


            stage("Docker new tag"){
                steps{
                    sh "docker push ${env.Image_Name}:${env.Version}"
                }
            }
    }




    post{
        success{
            emailtext(
                subject: "Success Build the Project ${env.JOB_NAME} and ${env.BUILD_NUMBER}",
                body: """
                <h1>Successfully Build</h1> 
                <b>JOB NAME:</b> ${env.JOB_NAME}<br>
                <b>BUILD NUMBER:</b> ${env.BUILD_NUMBER}<br>
                <b>BUILD_URLL</b> ${env.BUILD_URL}
                """,
                mimetype:"text/html",
                to:"afrilaknaf85@gmail.com"
            )
        }


        failure{
            emailtext(
                subject: "Failure Build the Project ${env.JOB_NAME} and ${env.BUILD_NUMBER}",
                body: """
                <h1>Failure Build</h1> 
                <b>JOB NAME:</b> ${env.JOB_NAME}<br>
                <b>BUILD NUMBER:</b> ${env.BUILD_NUMBER}<br>
                <b>BUILD_URLL</b> ${env.BUILD_URL}
                """,
                mimetype:"text/html",
                to:"afrilaknaf85@gmail.com"
            )
        }
    }
}