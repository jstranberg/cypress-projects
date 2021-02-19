const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_SELECTOR = '#comment' 
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
    static visit(){
        cy.visit(URL)
    }
    static fillFeedbackForm(){
        cy.get(NAME_INPUT).type("Name")
        cy.get(EMAIL_INPUT).type("fake@email.com")
        cy.get(SUBJECT_INPUT).type("Subjet")
        cy.get(COMMENT_SELECTOR).type("Comment")
    }
    static submitFeedbackForm(){
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage