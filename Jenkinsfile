pipeline {
    agent any

        environment{
            Image_Name="afrilaknaf036/ecommerce"
            Version=${BUILD_NUMBER}
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
                    sh "docker build -t ${env.Image_Name}:${Version}"
                }
            }


            stage("Check the image"){
                steps{
                    sh "docker ps -a"
                }
            }


            stage("Docker login"){
                steps{
                    withCredentials([usernamePassword(credentailsIds:"Docker_Account",
                    usernameVariable:"USER",
                    passwordVariable:"PASSWORD")]){
                        sh """
                       echo $PASSWORD | docker login -u $USER --password-stdin
                        """
                    }
                }
            }



        


    }
}