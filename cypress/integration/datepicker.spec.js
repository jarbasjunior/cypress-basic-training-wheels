it('Deve validar seleção de data no datepicker', () => {
  const endDate = new Date();
  const startDate = new Date(1972, 0, 1);
  const randomDate = new Date(startDate.getTime()
    + Math.random() * ((endDate.getTime() - startDate.getTime())));

  const date = {
    year: randomDate.getFullYear(),
    month: (`0${(randomDate.getMonth() + 1)}`).slice(-2),
    day: randomDate.getDate(),
    formatDay: (`0${randomDate.getDate()}`).slice(-2),
  };

  cy.visit('/datepicker');

  cy.get('.datetimepicker-dummy-input').click();
  cy.get('.datepicker-nav-year').click();
  cy.contains('.datepicker-year', date.year).click();

  cy.get('.datepicker-nav-month').click();
  cy.get(`[data-month=${date.month}]`).click();

  cy.get('.is-current-month').contains('button[class=date-item]', date.day).click();

  cy.get('#date').should('have.value', `${date.formatDay}/${date.month}/${date.year}`);
});
