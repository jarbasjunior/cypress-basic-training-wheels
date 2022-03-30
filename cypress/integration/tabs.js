it('Deve validar tag para abrir link em nova guia', () => {
  cy.visit('/new_tab');
  cy.get('a[href="https://www.google.com.br"]').should('have.attr', 'target', '_blank');
});

it('Deve abrir link externo na mesma guia', () => {
  cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target');
  cy.contains('a', 'Clique aqui').click();
  cy.get('input[name=q').type('Cypress');
});
