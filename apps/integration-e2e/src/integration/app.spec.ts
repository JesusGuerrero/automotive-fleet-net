/// <reference types="cypress" />

import { getTitle } from '../support/app.po';

describe('Hello Fleet Net', () => {
beforeEach( () => cy.viewport('iphone-6') )

  it('should display car dash', () => {
    cy.visit('http://127.0.0.1:8000');
    getTitle().contains('Car Dash');
  });
  it('should navigate to info', () => {
    cy.get('.car-info').click();
    getTitle().contains('Car Info');
  });
  it('should navigate back to dash', () => {
    cy.get('.back-button').click();
    getTitle().contains('Car Dash');
  });
  it('should navigate to controls', () => {
    cy.get('.car-controls').click();
    getTitle().contains('Car Controls');
  });
  it('should navigate back to dash', () => {
    cy.get('.back-button').click();
    getTitle().contains('Car Dash');
  });
  it('should navigate to hvac', () => {
    cy.get('.car-hvac').click();
    getTitle().contains('CLIMATE');
  });
  it('should lower temperature in hvac app and reflect on dashboard app', () => {
    cy.get('.fa-chevron-left').click();
    cy.get('.fa-chevron-left').click();
    cy.get('.hvac-temp').invoke('text').then( temp => {
      const t = temp.toString();
      cy.get('.back-button').click();
      cy.get('.dash-temp').contains(  t.trim() );
    });
  })
});
