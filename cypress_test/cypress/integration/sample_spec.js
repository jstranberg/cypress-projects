describe('My First Test', () => {
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})


pm.sendRequest("/resource/v1/service-request/post", function (err, response) {
    console.log(response.json());
});

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([201, 202]);
});

const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.id).to.be.a("number");
  pm.expect(jsonData.spPhone).to.be.a("number");
  pm.expect(jsonData.successfullyMatched).to.be.a("boolean");
});

pm.test("Body contains id", function () {
    pm.expect(pm.response.text()).to.include("id: 123");
});


pm.test("Body is correct", function () {
    pm.response.to.have.body("response_body_string");
});


pm.test("Respose includes results", function () {
    pm.expect(pm.response.json()).to.include.keys("results");
});



//collection has vars firstName and age
const grumpy = pm.collectionVariables.replaceIn("{{email}}");
console.log(grumpy);
