import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import {RouterTestingModule} from "@angular/router/testing";
import {SharedModule} from "@automotive-fleet-net/shared";
import {MatGridListModule, MatListModule, MatSlideToggleModule} from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {storeFreeze} from "ngrx-store-freeze";
import {NxModule} from "@nrwl/nx";

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent ],
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
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
