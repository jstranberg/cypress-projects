describe('Test contact form via WebDriverUni', () => {
    it('Should successfully submit the contact form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Seijin')
        cy.get('[name="last_name"]').type('Tranberg')
        cy.get('[name="email"]').type('devstudent89@gmail.com')
        cy.get('textarea.feedback-input').type('Some comment')
        cy.get('[type="submit"]').click()
        cy.url().should('include', 'contact-form-thank-you.html')
    });

    it('Should unsuccessfully submit the contact form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Seijin')
        cy.get('[name="last_name"]').type('Tranberg')
        cy.get('[type="submit"]').click()
        cy.get('body')
            .contains('Error: all fields are required Error: Invalid email address')
    });
})
