import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import {SharedModule} from "@automotive-fleet-net/shared";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {MatCardModule, MatGridListModule, MatListModule, MatSliderModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {storeFreeze} from "ngrx-store-freeze";
import {NxModule} from "@nrwl/nx";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        NxModule.forRoot(),
        FormsModule,
        SharedModule,
        RouterTestingModule,
        StoreModule.forRoot({}, {
          metaReducers: [storeFreeze]
        }),
        EffectsModule.forRoot([]),
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatSliderModule
      ],
      declarations: [AppComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/hvac'}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
