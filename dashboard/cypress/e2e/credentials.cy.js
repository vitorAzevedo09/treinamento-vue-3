const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credencials', () => {
  it('should generate an api_key', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.wait()
    cy.visit(`${APP_URL}/credencials`)
    cy.wait()

  })
})
