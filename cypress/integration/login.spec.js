it('Deve realizar login com sucesso', () => {
  const msgUserExpected = 'Olá Papito, bem-vindo ao Orkut';
  const msgWelcomeExpected = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah';
  cy.visit('/login');
  cy.get('#nickId').type('papitorocks');
  cy.get('#passId').type('pwd123');
  cy.get('button[type="submit"]').click();
  cy.get('h3[class="title is-4"]').should('have.text', msgUserExpected);
  cy.get('p[class="subheader"]').should('have.text', msgWelcomeExpected);
});
