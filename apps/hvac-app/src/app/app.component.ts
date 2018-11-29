import { Component } from '@angular/core';
import {CarFacade} from "@automotive-fleet-net/shared";

@Component({
  selector: 'automotive-fleet-net-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hvacPower;
  hvac$ = this.carFacade.hvac$;
  constructor( private carFacade: CarFacade) {
    carFacade.loadHvac();
    this.hvac$.subscribe( val => {
      console.log(val);
    })
  }
  raiseTemp() {
    this.carFacade.raiseTemp();
  }
  lowerTemp() {
    this.carFacade.lowerTemp();
  }
  fanSpeedChanged( $event ) {
    this.carFacade.changeFanSpeed( $event.value );
  }
}
