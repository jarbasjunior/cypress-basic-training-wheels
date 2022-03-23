describe('Testes de alerts, confirms e prompts', () => {
  before(() => cy.visit('/javascript_alerts'));

  it('Deve validar mensagem do alert', () => {
    cy.contains('button', 'Alerta').click();
    cy.on('window:alert', (result) => (
      expect(result).to.eq('Isto é uma mensagem de alerta')
    ));
    cy.get('#result').should('have.text', 'Você ativou um alerta JS');
  });

  it('Deve confirmar a solicitação', () => {
    cy.contains('button', 'Confirma').click();
    cy.on('window:confirm', () => true);
    cy.get('#result').should('have.text', 'Mensagem confirmada');
  });

  it('Deve cancelar a solicitação', () => {
    cy.contains('button', 'Confirma').click();
    cy.on('window:confirm', () => false);
    cy.get('#result').should('have.text', 'Mensagem não confirmada');
  });

  it('Deve confirmar prompt', () => {
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('Robô');
      cy.contains('button', 'Prompt').click();
    });
    cy.get('#result').should('have.text', 'Olá, Robô');
  });
});
