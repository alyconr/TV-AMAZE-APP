#!bin/bash
WORKING_DIR="WebpackBabelDockerDeploy"
IP="localhost"
USER="root"
BULD_ENV="prod"

while getopts ":u:i:d:e:m" opt; do
      case $opt in
        d ) WORKING_DIR="$OPTARG";;
        i ) IP="$OPTARG";;
        u ) USER="$OPTARG";;
        e ) BULD_ENV="$OPTARG";;
        m )
            echo "Usage:"
            echo "    deployment.sh -m               Display this help message."
            echo "    deployment.sh -d               Name of the destination Directory"
            echo "    deployment.sh -i               Name of the IP of the host"
            echo "    deployment.sh -u               Name of USER to deploy to the host" 
            echo "    deployment.sh -e               Choose build environment: 'prod' or 'dev' (default is 'prod')"
            exit 0
            ;;
        \?) echo "Invalid option: -"$OPTARG"" >&2
            exit 1;;
        : ) echo "Option -"$OPTARG" requires an argument." >&2
            exit 1;;
      esac
    done

echo "Your working directory is "$WORKING_DIR""
echo "Your IP is "$IP""
echo "Your USER is "$USER""
echo "Your build environment is "$BULD_ENV""


# before Copy the private key to the remote host to be able to ssh without password, remember to  run ssh-keygen in your local machine

# if the key does not exist, copy it

if [ ! -f $USER@$IP:~/.ssh/id_rsa.pub ]; then
    ssh-copy-id $USER@$IP
fi



#  Delete old versions
if [ -d "$WORKING_DIR" ]; then rm -Rf $WORKING_DIR ./$WORKING_DIR.tar.gz && ssh $USER@$IP "rm -Rf ~/PROJECTS/ && mkdir ~/PROJECTS/ && chmod -R 777  ~/PROJECTS/ && echo "redhat" | sudo -S docker stop \$(docker ps -a -q) &&  docker rm \$(docker ps -a -q) "; fi


# Build and bindle the app
if [ $BULD_ENV == "dev" ]; then
    npm run build-dev
else
    npm run build-prod
fi

# Create the new working directory
mkdir $WORKING_DIR
cp -r ./dist ./$WORKING_DIR
cp -r ./nginx ./$WORKING_DIR
cp -r ./docker-compose.yml ./$WORKING_DIR




# compress the working directory tar.gz
tar -zcvf $WORKING_DIR.tar.gz $WORKING_DIR

 
# Copy the compress project directory to the host
scp -r ./$WORKING_DIR.tar.gz $USER@$IP:~/PROJECTS/


# if the deployment is successful
if [ $? -eq 0 ]; then 
    echo "Deployment successful"
    if [ $? -eq 0 ]; then
    ssh $USER@$IP "cd ~/PROJECTS/ && tar -xvzf $WORKING_DIR.tar.gz && cd $WORKING_DIR && echo "redhat" | sudo -S docker compose up -d "
     
     if [ $? -eq 0 ]; then
        echo "Docker Deployment successful"
     else
        echo "Deployment failed"
     fi
    fi
else
    echo "Deployment failed"
fi





  