package main

import "fmt"
import "time"

func main() {

	start := time.Now()

	// 1 mln
	for i := 0; i < 10000000; i++ {
		fmt.Printf("\n", i)
	}

	fmt.Printf("%s",start)
	fmt.Printf("\n")
	fmt.Printf("%s",time.Now())




	
}