import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import {SharedModule} from "@automotive-fleet-net/shared";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {storeFreeze} from "ngrx-store-freeze";
import {MatCardModule, MatGridListModule, MatListModule, MatSliderModule} from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    FormsModule,
    SharedModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forRoot({}, {
      metaReducers: [storeFreeze]
    }),
    EffectsModule.forRoot([]),
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
