it('Deve selecionar um vingador no combobox', () => {
  const avengers = [
    { name: 'Steve Rogers', value: '1' },
    { name: 'Bucky', value: '2' },
    { name: 'Tony Stark', value: '3' },
    { name: 'Natasha Romanoff', value: '4' },
    { name: 'Bruce Banner', value: '5' },
    { name: 'Loki', value: '6' },
    { name: 'Scott Lang', value: '7' },
  ];
  const avenger = avengers[Math.floor(Math.random() * avengers.length)];

  cy.visit('/select');
  cy.get('#avengerList').select(avenger.name).should('have.value', avenger.value);
});
