#!bin/bash
WORKING_DIR="WebpackBabelDeploy"
URL="localhost"
while getopts ":u:d:h" opt; do
      case $opt in
        d ) WORKING_DIR="$OPTARG";;
        u ) URL="$OPTARG";;
        h )
            echo "Usage:"
            echo "    deploy.sh -h               Display this help message."
            echo "    deploy.sh -d               Name of the destination Directory"
            echo "    deploy.sh -u               Name of the url of the host"
            exit 0
            ;;
        \?) echo "Invalid option: -"$OPTARG"" >&2
            exit 1;;
        : ) echo "Option -"$OPTARG" requires an argument." >&2
            exit 1;;
      esac
    done

echo "Your working directory is "$WORKING_DIR""
echo "Your url is "$URL""

#  Delete old versions
if [ -d "$WORKING_DIR" ]; then rm -Rf $WORKING_DIR; fi
if [ -d "$WORKING_DIR.zip" ]; then rm -Rf $WORKING_DIR.zip; fi


# Build and bundle the app
npm run build-prod

# Create the new working directory
mkdir $WORKING_DIR
cp -r ./dist ./$WORKING_DIR
cp -r ./nginx ./$WORKING_DIR
cp -r ./docker-compose.yml ./$WORKING_DIR

# Change server name in nginx conf
cd ./$WORKING_DIR/nginx
# sed -i 's/example.org/"$URL"/g' nginx.conf Linux version
sed -i '' 's/example.local/'"${URL}"'/g' nginx.conf

# Zip
cd ..
zip -r $WORKING_DIR.zip $WORKING_DIR/
rm -Rf $WORKING_DIR