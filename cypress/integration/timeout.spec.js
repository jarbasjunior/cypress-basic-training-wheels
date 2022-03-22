it('Deve preencher valor após campo estar habilitado', () => {
  const msg = 'Testando preenchimento de campo após ser habilitado';
  cy.visit('/timeout');
  cy.contains('button', 'Habilita').click();
  cy.get('#firstname').type(msg, { timeout: 10000 });
  cy.get('#firstname').invoke('val')
    .then((text) => expect(text).to.eq(msg));
});
