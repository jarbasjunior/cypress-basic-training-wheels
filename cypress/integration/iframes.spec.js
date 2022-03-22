const iFrame = (element) => (
  cy.get(element)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
);

it('Deve acessar elemento via IFrame bom', () => {
  cy.visit('/nice_iframe');
  iFrame('#weareqaninja')
    .contains('.UsernameText', 'qa.ninja').should('be.visible');
});

it('Deve acessar elemento via IFrame ruim', () => {
  cy.visit('/bad_iframe');
  iFrame('iframe[src*=instagram]')
    .contains('.UsernameText', 'qa.ninja').should('be.visible');
});
