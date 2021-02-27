const URL = '/feedback.html'
const NAME = '#name'
const EMAIL = '#email'
const SUBJECT = '#subject'
const COMMENT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'
const FEEDBACK_URL = '/sendFeedback.html'

class FeedbackPage {
    static visit(){
        cy.visit(URL)
    }

    static fillFeedbackForm(){
        cy.get(NAME).type('Johnny Appleseed')
        cy.get(EMAIL).type('jappleseed@email.com')
        cy.get(SUBJECT).type('Urgent message')
        cy.get(COMMENT).type('This should be human readable in the end')
    }

    static submitFeedbackForm(){
        cy.get(SUBMIT_BUTTON).click()
    }

    static confirmFormSubmission(){
        cy.url().should('include', FEEDBACK_URL)
    }
}

export default FeedbackPage