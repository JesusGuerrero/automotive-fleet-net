# Automotive Fleet Net

## Get Started

* `git clone git@github.com:JesusGuerrero/automotive-fleet-net.git`
* `cd automotive-fleet-net`
* `npm install`
* `npm run build` 

The build artifacts will be stored in the `server/` directory.

## Start

Run `npm run start:server` to start the project.

Open Chrome browser and go to [http://127.0.0.1:8000](http://127.0.0.1:8000)

__Note:__ _There is a Go script used to run a downstream server with Car Information._
 _You can run this server as_ 

* `go run backend/api_2.go`

_the Go Server provides JSON Data for the Car Info Page View_

## Run Unit Tests

Run `npm run test` to execute the unit tests.
 
 The tests execute using [Jest](https://jestjs.io/).

## Running End-to-End (E2E) Tests

Run `npm run e2e`

The E2E tests execute using [Cypress](https://www.cypress.io/).

__Note:__ Before you run E2E make sure you have `npm run start:server` running.

## Demo

<video width="414" height="736" controls>
  <source src="https://github.com/JesusGuerrero/automotive-fleet-net/blob/master/demo/auto-flee-net-demo.mov">
</video>

## Further help

Jesus Rocha 

<rjezuz@gmail.com>
