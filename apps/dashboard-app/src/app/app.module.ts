import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import {MatGridListModule, MatListModule, MatSlideToggleModule} from "@angular/material";
import { ControlsComponent } from './pages/controls/controls.component';
import { SharedModule } from "@automotive-fleet-net/shared";
import { StoreModule } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { EffectsModule } from "@ngrx/effects";

const routes: Routes = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'info',
    component: InfoComponent
  }, {
    path: 'controls',
    component: ControlsComponent
  }];
@NgModule({
  declarations: [AppComponent, InfoComponent, HomeComponent, ControlsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
    MatListModule,
    MatGridListModule,
    MatSlideToggleModule,
    SharedModule,
    StoreModule.forRoot({}, {
      metaReducers: [storeFreeze]
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
