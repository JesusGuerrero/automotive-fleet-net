import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SharedModule} from "@automotive-fleet-net/shared";
import {MatGridListModule, MatListModule, MatSlideToggleModule} from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {storeFreeze} from "ngrx-store-freeze";
import {NxModule} from "@nrwl/nx";
import {RouterTestingModule} from "@angular/router/testing";
import {InfoComponent} from "./pages/info/info.component";
import {HomeComponent} from "./pages/home/home.component";
import {ControlsComponent} from "./pages/controls/controls.component";

describe('AppComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, InfoComponent, HomeComponent, ControlsComponent],
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
