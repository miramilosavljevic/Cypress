/// <reference types="cypress" />


it('google test', function() {
    
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    
})

it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > li').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
})
