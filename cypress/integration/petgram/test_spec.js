/* global describe, it, cy */
describe('Petgram', function(){
    it('para ver si la app funciona', function(){
        cy.visit('/')
    })
    it('navegar a categoria y ver fotos', function(){
        cy.visit('/pet/1')
        cy.get('article')
    })
    it('Si podemos navegar con la navbar a la home', function(){
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url.should('include', '/')
    })
    it('los usuarios no registrados ven el formulario de inicio al ir a favs', function(){
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})
