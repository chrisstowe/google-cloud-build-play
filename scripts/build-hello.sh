#!/bin/bash

gcloud builds submit --config ./hello/cloudbuild.yaml --substitutions=COMMIT_SHA="hello-12345" .
