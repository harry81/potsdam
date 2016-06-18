#!/bin/bash

ng build --prod
aws s3 sync dist s3://postdam.hoodpub.com --region eu-central-1 --profile pointer
