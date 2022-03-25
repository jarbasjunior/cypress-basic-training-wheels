it('Deve exibir o toast raṕido', () => {
  cy.visit('/toaster');
  cy.contains('button', 'Toast Rápido').click();
  cy.get('.notification').should('have.text', 'Essa notificação é muito rápida!');
});

it('Deve exibir o toast lento', () => {
  cy.visit('/toaster');
  cy.contains('button', 'Toast Lento').click();
  cy.get('.notification').should('have.text', 'Essa notificação é mais fácil para testar!');
});
