describe('application smoke', () => { it('loads the configured application', () => { cy.visit('/'); cy.document().its('title').should('not.be.empty'); }); });
