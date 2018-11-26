import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'info',
    component: InfoComponent
}];
@NgModule({
  declarations: [AppComponent, InfoComponent, HomeComponent],
  imports: [BrowserModule, NxModule.forRoot(), RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
