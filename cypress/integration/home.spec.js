describe('Ao visitar home, página deve:', () => {
  before(() => {
    cy.visit('/');
  });

  it('Exibir o título Training Wheels | QAninja', () => {
    cy.title().should('eq', 'Training Wheels | QAninja');
  });

  it('Exibir logo Training Wheel da QA Ninja', () => {
    cy.get('a > img').should('have.attr', 'src', '/img/bg-hero-v2.png');
  });

  it('Exibir menu de ações em páginas Web com 17 items', () => {
    cy.get('ul[class=menu-list] li')
      .should('be.visible')
      .and('have.length', 17);
  });
});
