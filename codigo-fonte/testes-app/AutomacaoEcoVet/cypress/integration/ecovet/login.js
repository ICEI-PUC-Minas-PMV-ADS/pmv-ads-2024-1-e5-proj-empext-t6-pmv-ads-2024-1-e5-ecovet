import { Before, Given, When } from "cypress-cucumber-preprocessor/steps"
import { slowCypressDown } from 'cypress-slow-down'

/// <reference types="Cypress" />

//const cor = '#00FF7F'

slowCypressDown(150)

Before(() => {
    cy.clearAllCookies()
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

Given(/^faz login na aplicacao EcoVet$/, () => {
    cy.visit('/')
    // cy.get('#j_username').type(Cypress.env("username"))
    // cy.get('#j_password').type(Cypress.env("password"), { log: false })
    // cy.get('#loginbutton').click()
})

When(/^acessa a aplicacao de monitoramento$/, () => {
    
})
//export { cor }