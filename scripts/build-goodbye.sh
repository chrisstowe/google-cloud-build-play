#!/bin/bash

gcloud builds submit --config ./goodbye/cloudbuild.yaml --substitutions=COMMIT_SHA="goodbye-12345" .
