import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router: Router) { }

  goTo( loc ) {
    window['location']['href'] = loc;
  }
  tryRoute( dynamicLink ){
    if( dynamicLink ) {
      this.router.navigate(['/']);
    } else {
      this.goTo('/')
    }
  }
}
