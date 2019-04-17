GO := go
APP_NAME := goodbye

# Set this var to override the build directory.
BUILD_DIR ?= build

get-dep:
	@echo ">> getting $(APP_NAME) dependencies"
	$(GO) get ./...

build: get-dep
	@echo ">> building $(APP_NAME) binaries"
	$(GO) build -o $(BUILD_DIR)/$(APP_NAME) ./cmd/$(APP_NAME)

test: get-dep
	@echo ">> testing binaries"
	$(GO) test -v ./cmd/$(APP_NAME)

clean:
	@echo ">> removing binaries"
	rm -rf $(BUILD_DIR)

.PHONY: get-dep build test clean
