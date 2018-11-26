import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'automotive-fleet-net-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fleet Net';
  view;
  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe( res => {
      if( res['url'] ) {
        this.view = res['url']
      }
    });
  }
}
