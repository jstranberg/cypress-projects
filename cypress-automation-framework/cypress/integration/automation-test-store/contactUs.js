describe('Test contact form via Automation Test Store', () => {
    it('Should successfully submit the contact form', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.get('#ContactUsFrm_first_name').type('Seijin')
        cy.get('#ContactUsFrm_email').type('devstudent89@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Some comment')
        cy.get('.col-md-6 > .btn').click()
        cy.url().should('include', 'success')
    });


    //ADD TESTS 
        // To Reset form
        // invalid email 
        // Blank fields

    // it('Should unsuccessfully submit the contact form', () => {
    //     cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('[name="first_name"]').type('Seijin')
    //     cy.get('[name="last_name"]').type('Tranberg')
    //     cy.get('[type="submit"]').click()
    //     cy.get('body')
    //         .contains('Error: all fields are required Error: Invalid email address')
    // });
})
