import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {SharedModule} from "@automotive-fleet-net/shared";
import {MatGridListModule, MatListModule, MatSlideToggleModule} from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {storeFreeze} from "ngrx-store-freeze";
import {NxModule} from "@nrwl/nx";
import {AppComponent} from "../../app.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Parked'`, () => {
    expect(component.driveState).toEqual('Parked');
  });
  it('should render title in a h5 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain(
      'Parked'
    );
  });
});
