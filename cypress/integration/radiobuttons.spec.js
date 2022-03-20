describe('Ao marcar radio button, deve:', () => {
  const movies = ['cap', 'capmarvel', 'ironman', 'hulk', 'ironman2', 'thor', 'avengers', 'ironman3', 'tho2', 'cap2', 'guardians',
    'guardians2', 'avengers2', 'antman', 'cap3', 'blackwidow', 'spider', 'strange', 'blackpanther', 'thor3', 'antman2', 'avengers3',
    'avengers4', 'spider2', 'spider3', 'shangchi', 'eternals'];

  const chosenMovie = movies[Math.floor(Math.random() * movies.length)];
  const unselectMovies = movies.filter((movie) => movie !== chosenMovie);

  before(() => {
    cy.visit('/radios');
  });

  it('Marcar apenas radio button do filme selecionado', () => {
    cy.get(`input[value=${chosenMovie}]`).click().should('be.checked');
  });

  it('Manter todos os outros radios desmarcados', () => {
    unselectMovies.forEach((movie) => {
      cy.get(`input[value=${movie}]`).should('not.be.checked');
    });
  });
});
