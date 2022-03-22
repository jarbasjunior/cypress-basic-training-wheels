it('Deve realizar o upload de imagem', () => {
  const imageFile = 'cypress/fixtures/images/papito.jpeg';
  cy.visit('/upload');
  cy.get('#file-upload').selectFile(imageFile, { force: true });
  cy.get('#file-submit').click();
});
