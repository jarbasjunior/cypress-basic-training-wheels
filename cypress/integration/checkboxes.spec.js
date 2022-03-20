it('Deve marcar 5 checkboxes', () => {
  const movies = ['cap', 'capmarvel', 'ironman', 'hulk', 'ironman2', 'thor', 'avengers', 'ironman3', 'tho2', 'cap2', 'guardians',
    'guardians2', 'avengers2', 'antman', 'cap3', 'blackwidow', 'spider', 'strange', 'blackpanther', 'thor3', 'antman2', 'avengers3',
    'avengers4', 'spider2', 'spider3', 'shangchi', 'eternals'];

  const moviesToSelect = 5;
  const chosenMovies = movies.sort(() => 0.5 - Math.random()).slice(0, moviesToSelect);
  cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes');

  chosenMovies.forEach((movie) => {
    cy.get(`input[name=${movie}]`).click().should('be.checked');
  });
});
