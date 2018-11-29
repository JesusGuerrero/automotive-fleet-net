import { Component, OnInit } from '@angular/core';
import { CarFacade } from "@automotive-fleet-net/shared";

@Component({
  selector: 'automotive-fleet-net-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infoLoading$ = this.carFacade.loaded$;
  info$ = this.carFacade.info$;
  constructor(private carFacade: CarFacade) {
    carFacade.loadInfo();
  }

  ngOnInit() {

    this.info$.subscribe( val => {
      console.log(val);
    });
  }

}
