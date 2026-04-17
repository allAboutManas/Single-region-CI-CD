#!/bin/bash

REGION=$1

echo "Running health check for $REGION"

curl -f http://localhost:3000/health

if [ $? -eq 0 ]; then
  echo "Health check passed for $REGION"
else
  echo "Health check failed for $REGION"
  exit 1
fi