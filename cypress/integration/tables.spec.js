const series = [
  {
    name: 'Loki', producer: 'Marvel', streaming: 'Disney+', releaseYear: '2021',
  },
  {
    name: 'The Witcher', producer: 'Netflix', streaming: 'Netflix', releaseYear: '2019',
  },
  {
    name: 'Round 6', producer: 'Siren Pictures', streaming: 'Netflix', releaseYear: '2021',
  },
  {
    name: 'Supernatural', producer: 'Warner Bros', streaming: 'PrimeVideo', releaseYear: '2005',
  },
  {
    name: 'O Mandaloriano', producer: 'Lucasfilm', streaming: 'Disney+', releaseYear: '2019',
  },
  {
    name: 'Cobra Kai', producer: 'Netflix', streaming: 'Netflix', releaseYear: '2018',
  },
  {
    name: 'What If', producer: 'Marvel', streaming: 'Disney+', releaseYear: '2021',
  },
];

describe('Ao visualizar tabela de séries deve:', () => {
  before(() => {
    cy.visit('/tables');
  });

  it('Exibir 7 séries', () => {
    cy.get('table tbody tr')
      .then((items) => (expect(items).to.have.length(7)));
  });

  it('Exibir detalhamento de cada série', () => {
    series.forEach((serie) => {
      cy.contains('.key-value', serie.name)
        .then((items) => {
          cy.get(items[0]).siblings('td').should('contain.text', serie.producer);
          cy.get(items[0]).siblings('td').should('contain.text', serie.streaming);
          cy.get(items[0]).siblings('td').should('contain.text', serie.releaseYear);
        });
    });
  });
});

it('Deve excluir uma série da tabela de séries', () => {
  const chosenSerie = series[Math.floor(Math.random() * series.length)];
  cy.visit('/tables');
  cy.contains('table tbody tr', chosenSerie.name)
    .then((item) => {
      item.find('.delete').trigger('click');
    }).should('not.exist');

  cy.get('table tbody tr')
    .then((items) => expect(items).to.have.length(6));
});
