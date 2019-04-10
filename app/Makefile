GO := go
APP_NAME := hello

# Set this var to override the build directory.
BUILD_DIR ?= build

get-dep:
	@echo ">> getting $(APP_NAME) dependencies"
	$(GO) get ./...

build: get-dep
	@echo ">> building $(APP_NAME) binaries"
	$(GO) build -o $(BUILD_DIR)/$(APP_NAME) ./$(APP_NAME)

unit-test: get-dep
	@echo ">> unit testing binaries"
	$(GO) test -v ./common -tags=unit

clean:
	@echo ">> removing binaries"
	rm -rf $(BUILD_DIR)

.PHONY: get-dep build unit-test clean
