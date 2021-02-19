describe('test cypress', () => {
    it('will visit page', () => {
        cy.visit('https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress')
        cy.url('include', 'gui-on-wsl-cypress')
    });
})
