package main

import (
  "fmt"
  "net/http"
  "encoding/json"
)

type Attribute struct {
  Key string  `json:"key"`
  Value string `json:"value"`
}

func getStatic(w http.ResponseWriter, r *http.Request) {
  var vehicleInfo [5]Attribute

  vehicleInfo[0] = Attribute{Key: "Model", Value: "X"}
  vehicleInfo[1] = Attribute{Key: "Color", Value: "Black"}
  vehicleInfo[2] = Attribute{Key: "Wheels", Value: "21\" grey turbines"}
  vehicleInfo[3] = Attribute{Key: "Sunroof", Value: "true"}
  vehicleInfo[4] = Attribute{Key: "Dual Motor", Value: "true"}
  res, _ := json.Marshal(vehicleInfo)
  w.Write( []byte(res) )
}

func main() {
	fmt.Printf("Server Running 127.0.0.1:8001\n");
	http.HandleFunc("/api_2/go", getStatic)
  if err := http.ListenAndServe(":8001", nil); err != nil {
    panic(err)
  }
}
