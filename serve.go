package main

import (
	"fmt"
	"net/http"
	"os"
)

// go build -ldflags "-s -w"  -o serve serve.go

func main() {
	port := ":8001" // my fev port for some reason
	if len(os.Args) == 2 {
		port = ":" + os.Args[1]
	}
	http.Handle("/", http.FileServer(http.Dir(".")))

	fmt.Println("serving at http://localhost" + port)

	if err := http.ListenAndServe(port, nil); err != nil {
		fmt.Println("error:", err)
		os.Exit(1)
	}
}
