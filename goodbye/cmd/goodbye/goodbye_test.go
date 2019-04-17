package main

import (
	"fmt"
	"testing"
)

func Test_Goodbye(t *testing.T) {
	fmt.Println("testing goodbye")
	t.Error("Oh no! Errors :O")
}
