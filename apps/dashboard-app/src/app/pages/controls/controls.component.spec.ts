import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsComponent } from './controls.component';
import {RouterTestingModule} from "@angular/router/testing";
import {SharedModule} from "@automotive-fleet-net/shared";
import {MatGridListModule, MatListModule, MatSlideToggleModule} from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {storeFreeze} from "ngrx-store-freeze";
import {NxModule} from "@nrwl/nx";

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NxModule.forRoot(),
        RouterTestingModule,
        MatListModule,
        MatGridListModule,
        MatSlideToggleModule,
        SharedModule,
        StoreModule.forRoot({}, {
          metaReducers: [storeFreeze]
        }),
        EffectsModule.forRoot([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
