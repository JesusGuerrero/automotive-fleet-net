/// <reference types="cypress" />

import { getGreeting } from '../support/app.po';

describe('Hello Fleet Net', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Fleet Net');
  });
});
