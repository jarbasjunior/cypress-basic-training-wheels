describe('Quando selecionar 5 filmes, deve:', () => {
  const movies = ['cap', 'capmarvel', 'ironman', 'hulk', 'ironman2', 'thor', 'avengers', 'ironman3', 'tho2', 'cap2', 'guardians',
    'guardians2', 'avengers2', 'antman', 'cap3', 'blackwidow', 'spider', 'strange', 'blackpanther', 'thor3', 'antman2', 'avengers3',
    'avengers4', 'spider2', 'spider3', 'shangchi', 'eternals'];

  const moviesToSelect = 5;
  const chosenMovies = movies.sort(() => 0.5 - Math.random()).slice(0, moviesToSelect);
  const unselectMovies = movies.filter((movie) => !chosenMovies.includes(movie));

  before(() => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes');
  });

  it('Marcar os 5 filmes escolhidos', () => {
    chosenMovies.forEach((movie) => {
      cy.get(`input[name=${movie}]`).click().should('be.checked');
    });
  });

  it('Manter desmarcados os demais filmes', () => {
    unselectMovies.forEach((movie) => {
      cy.get(`input[name=${movie}]`).should('not.be.checked');
    });
  });
});
