#!/bin/bash

REGION=$1

echo "Starting deployment to $REGION"

mkdir -p /tmp/demo-app
cp build/app.tar.gz /tmp/demo-app/app.tar.gz

cd /tmp/demo-app
tar -xzf app.tar.gz

echo "Deployment completed to $REGION"