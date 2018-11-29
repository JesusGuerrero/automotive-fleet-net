import { Component } from '@angular/core';
import {CarFacade, UtilService} from "@automotive-fleet-net/shared";

@Component({
  selector: 'automotive-fleet-net-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  driveState = 'Parked';
  hvac$ = this.carFacade.hvac$;
  constructor(public util: UtilService, private carFacade: CarFacade) {
    carFacade.loadHvac();
  }

}
