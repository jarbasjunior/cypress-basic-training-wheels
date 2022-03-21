describe('Ao realizar validações nas caixas de seleção de frameworks, deve:', () => {
  before(() => {
    cy.visit('/apps/select2/index.html');
  });

  it('Selecionar um framework no combobox de seleção única', () => {
    const frameworks = [
      'Cypress', 'Nightwatch.js', 'Playwright', 'Protractor', 'Robot Framework', 'Selenium Webdriver', 'WebdriverIO',
    ];
    const framework = frameworks[Math.floor(Math.random() * frameworks.length)];

    cy.get('.select2-selection--single').click();
    cy.contains('.select2-results__option', framework).click();
    cy.get('.select2-selection--single').children().should('have.text', framework);
    cy.get('.select2-selection--single').children().should('have.attr', 'title', framework);
  });

  it('Selecionar múltiplos frameworks no combobox de seleção múltipla', () => {
    const frameworks = [
      'Cypress', 'Nightwatch.js', 'Playwright', 'Protractor', 'Robot Framework', 'Selenium Webdriver', 'WebdriverIO',
    ];
    const chosenFrameworks = frameworks.sort(() => 0.5 - Math.random()).slice(0, 4);

    chosenFrameworks.forEach((framework) => {
      cy.get('.select2-selection--multiple').click();
      cy.contains('.select2-results__option', framework).click();
      cy.get(`li[title="${framework}"]`).should('be.visible');
    });

    chosenFrameworks.forEach((framework) => {
      cy.get(`li[title="${framework}"]`).should('be.visible');
    });
  });
});
