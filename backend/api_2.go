package main

import (
  "fmt"
  "net/http"
  "encoding/json"
)

type response struct {
    Vin   string      `json:"vin"`
    Model string   `json:"model"`
    Color string   `json:"color"`
    Sunroof bool `json:"sunroof"`
    Dualmotor bool `json:"dualMotor"`
}

func getStatic(w http.ResponseWriter, r *http.Request) {
  res2D := &response{
          Vin:   "1FAFP53S0XA130886",
          Model: "X",
          Color: "Black",
          Sunroof: true,
          Dualmotor: true}
      res, _ := json.Marshal(res2D)
      w.Write( []byte(res) )
}

func main() {
	fmt.Printf("Server Running 127.0.0.1:8001\n");
	http.HandleFunc("/api_2/go", getStatic)
  if err := http.ListenAndServe(":8001", nil); err != nil {
    panic(err)
  }
}
