# This is the build environment.
# Only specify commands here needed for building the app.
FROM golang:1.11-alpine as build-env

# These would normally be factored out into a base build image.
RUN apk update && apk add \
    make \
    git

WORKDIR /go/src/github.com/ForgeCloud/poc-fraas-ci/hello

COPY Makefile .
COPY cmd ./cmd

RUN make build

# This is the runtime environment.
# Only specify commands here needed for running the app.
FROM alpine

WORKDIR /opt/app

# Install the built app.
COPY --from=build-env /go/src/github.com/ForgeCloud/poc-fraas-ci/hello/build/hello .

EXPOSE 80

ENTRYPOINT [ "./hello" ]