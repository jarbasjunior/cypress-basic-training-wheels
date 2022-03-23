it('Deve validar mensagem do alert', () => {
  cy.visit('/javascript_alerts');
  cy.contains('button', 'Alerta').click();
  cy.on('window:alert', (result) => (
    expect(result).to.eq('Isto é uma mensagem de alerta')
  ));
  cy.get('#result').should('have.text', 'Você ativou um alerta JS');
});

it('Deve confirmar a solicitação', () => {
  cy.visit('/javascript_alerts');
  cy.contains('button', 'Confirma').click();
  cy.on('window:confirm', () => true);
  cy.get('#result').should('have.text', 'Mensagem confirmada');
});

it('Deve cancelar a solicitação', () => {
  cy.visit('/javascript_alerts');
  cy.contains('button', 'Confirma').click();
  cy.on('window:confirm', () => false);
  cy.get('#result').should('have.text', 'Mensagem não confirmada');
});
