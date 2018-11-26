import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import {MatGridListModule, MatIconModule, MatListModule, MatMenuModule} from "@angular/material";
import { ControlsComponent } from './pages/controls/controls.component';

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
    MatIconModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
