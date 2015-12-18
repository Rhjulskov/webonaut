#!/bin/bash

# args
environment=${1}
modulus_name=${2}

# Set Modulus env vars and deploy
modulus_token=""
MODULUS_TOKEN="${modulus_token}" modulus env load ENVIRONMENT/${environment}.json -p "${modulus_name}"
MODULUS_TOKEN="${modulus_token}" modulus env set "METEOR_SETTINGS" `jq -c -s '.[0] * .[1]' ../settings.json METEOR_SETTINGS/${environment}.json` -p "${modulus_name}"
cd ../
MODULUS_TOKEN="${modulus_token}" modulus deploy -p "${modulus_name}"
