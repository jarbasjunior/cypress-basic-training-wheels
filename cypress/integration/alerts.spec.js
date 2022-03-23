it('Deve validar mensagem do alert', () => {
  cy.visit('/javascript_alerts');
  cy.contains('button', 'Alerta').click();
  cy.on('window:alert', (result) => (
    expect(result).to.eq('Isto é uma mensagem de alerta')
  ));
  cy.get('#result').should('have.text', 'Você ativou um alerta JS');
});
