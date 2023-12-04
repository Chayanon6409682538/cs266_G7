describe('open HTML', () => {
  it('outdistance', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(1000);
  })
})
describe('Setting Button', () => {
  it('outdistance ', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(1000);
    cy.get('.js-settings').click();
    cy.wait(500);
  })
}) 
describe('Easy Button', () => {
  it('Click Easy', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-easy').click();
    cy.wait(500);
  })
}) 
describe('Normal Button', () => {
  it('Click Normal', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-normal').click();
    cy.wait(500);
  })
}) 
describe('Hard Button', () => {
  it('Click Hard', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-hard').click();
    cy.wait(500);
  })
})  
describe('Custom Button', () => {
  it('Click Custom', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-custom').click();
    cy.wait(500);
  })
})
describe('Easy Button value', () => {
  it('Click Easy_value', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-easy').click();
    cy.window().then((win) => {
      const { cols, rows, bombs } = win.game;
      cy.log('Cols:', cols);
      cy.log('Rows:', rows);
      cy.log('Bombs:', bombs);
    });
    cy.wait(500);
  })
})
describe('Normal Button value', () => {
  it('Click Normal_value', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-normal').click();
    cy.window().then((win) => {
      const { cols, rows, bombs } = win.game;
      cy.log('Cols:', cols);
      cy.log('Rows:', rows);
      cy.log('Bombs:', bombs);
    });
    cy.wait(500);
  })
})
describe('Hard Button value', () => {
  it('Click Hard_value', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-hard').click();
    cy.window().then((win) => {
      const { cols, rows, bombs } = win.game;
      cy.log('Cols:', cols);
      cy.log('Rows:', rows);
      cy.log('Bombs:', bombs);
    });
    cy.wait(500);
  })
})
describe('Custom alert rows*cell != 2500', () => {
  it('Click Custom_row*cell', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-custom').click();
    cy.wait(500);
    cy.get('#cols').clear().type('51');
    cy.wait(500);
    cy.get('#rows').clear().type('51');
    cy.wait(500);
    cy.wait(500);
    cy.get('.js-popup-new-game').click();
    cy.wait(1000);
  })
})
describe('Custom alert bombs!> rows*cells', () => {
  it('Click Custom_bombs', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-custom').click();
    cy.wait(500);
    cy.get('#bombs').clear().type('150');
    cy.wait(500);
    cy.get('.js-popup-new-game').click();
    cy.wait(1000);
  })
})
describe('click save and return', () => {
  it('Click save_return', () => {
    cy.visit('http://localhost:8000/emoji-minesweeper-gh-pages/')
    cy.wait(500);
    cy.get('.js-settings').click();
    cy.wait(500);
    cy.get('.button-custom').click();
    cy.wait(500);
    cy.get('#cols').clear().type('20');
    cy.wait(500);
    cy.get('#rows').clear().type('20');
    cy.wait(500);
    cy.get('.js-popup-new-game').click();
    cy.wait(1000);
  })
})