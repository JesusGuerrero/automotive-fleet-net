import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatGridListModule, MatMenuModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CAR_FEATURE_KEY, initialState as carInitialState, carReducer } from './+state/car.reducer';
import { CarEffects } from './+state/car.effects';
import { CarFacade } from './+state/car.facade';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, MatGridListModule, MatMenuModule, RouterModule,
    HttpClientModule,
    StoreModule.forFeature(CAR_FEATURE_KEY, carReducer, { initialState: carInitialState }),
    EffectsModule.forFeature([CarEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 8
    })
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [CarFacade]
})
export class SharedModule {}

