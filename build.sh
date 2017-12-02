#! /bin/bash
GIT_HEAD_COMMIT=$(git log --pretty=format:'%h' -n 1)
CONTAINER_NAME="vue-crud-$GIT_HEAD_COMMIT"
IMAGE_NAME="vue-crud-$GIT_HEAD_COMMIT"

if [ "$(docker ps -qf name=$CONTAINER_NAME)" ]; then
    echo "DELETING LEFT OVER CONTAINER: " $CONTAINER_NAME
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

docker build -t $IMAGE_NAME -f Dockerfile .

EXIT_CODE=$?

docker run -dt --name=$CONTAINER_NAME $IMAGE_NAME /bin/bash

docker cp $CONTAINER_NAME:/usr/src/app/dist/ .

# Finally we clean up after ourselves
docker stop $CONTAINER_NAME
docker image prune -f
docker container prune -f

exit $EXIT_CODE
