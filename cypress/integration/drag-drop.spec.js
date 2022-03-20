describe('Drag and Drops', () => {
  before(() => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop');
  });

  it('Deve arrastar a imagem do Cypress da coluna Ruby para a do Node', () => {
    const dataTransfer = new DataTransfer();
    cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer });
    cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer });
    cy.get('img[alt=Cypress]').should('have.attr', 'src', '/img/cypress.png');
  });

  it('Deve arrastar a imagem do Robot da coluna do PHP para a do Python', () => {
    const dataTransfer = new DataTransfer();
    cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer });
    cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer });
    cy.get('img[alt="Robot Framework"]').should('have.attr', 'src', '/img/robot.png');
  });
});
