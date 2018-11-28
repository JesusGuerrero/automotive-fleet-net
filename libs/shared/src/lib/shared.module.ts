import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatGridListModule, MatMenuModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, MatGridListModule, MatMenuModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule {}
