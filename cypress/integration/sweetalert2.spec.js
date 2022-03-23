it('deve exibir mensagem de sucesso no popup', () => {
  cy.visit('/sweet_alert');
  cy.contains('button', 'Sucesso').click();
  cy.get('.swal-modal').children('.swal-icon--success').should('be.visible');
  cy.get('.swal-title').should('have.text', 'Tudo certo!');
  cy.get('.swal-text').should('have.text', 'Você clicou no botão verde.');
});

it('deve exibir mensagem de erro no popup', () => {
  cy.visit('/sweet_alert');
  cy.contains('button', 'Deu Ruim').click();
  cy.get('.swal-modal').children('.swal-icon--error').should('be.visible');
  cy.get('.swal-title').should('have.text', 'Deu Ruim!');
  cy.get('.swal-text').should('have.text', 'Você clicou no botão vermelho.');
});
