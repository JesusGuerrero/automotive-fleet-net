import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { UtilService } from "../../services/util.service";

@Component({
  selector: 'automotive-fleet-net-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() dynamicLink = false;
  @Input() title;
  public view = 'child';
  constructor(private router: Router, public util: UtilService) { }

  ngOnInit() {
    if( this.dynamicLink ) {
      this.router.events.subscribe( res => {
        if( res['url'] ) {
          this.view = res['url'];
        }
      });
    }
  }

}
