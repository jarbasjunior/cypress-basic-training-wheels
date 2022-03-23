it('Deve exibir nome ao colocar cursor sobre a imagem', () => {
  const technologies = [
    { img: 'img[src*=python]', tag: '.tag-python', tech: 'Python' },
    { img: 'img[src*=golang]', tag: '.tag-golang', tech: 'Golang' },
    { img: 'img[src*=node]', tag: '.tag-nodejs', tech: 'Node.js' },
    { img: 'img[src*=netcore]', tag: '.tag-netcore', tech: '.NETCore' },
  ];

  cy.visit('/hovers');

  technologies.forEach((technology) => {
    cy.get(technology.img).realHover('mouse');
    cy.get(technology.tag)
      .should('be.visible')
      .should('have.text', technology.tech);
  });
});
