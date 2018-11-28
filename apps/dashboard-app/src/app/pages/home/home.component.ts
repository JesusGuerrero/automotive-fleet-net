import { Component } from '@angular/core';
import {UtilService} from "@automotive-fleet-net/shared";

@Component({
  selector: 'automotive-fleet-net-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  driveState = 'Parked';
  constructor(public util: UtilService) { }

}
