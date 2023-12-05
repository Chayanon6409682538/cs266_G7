describe('Start Button', () => {
    it('Click Button Start' , () => {
      cy.wait(1000);
      cy.visit('http://localhost:8000/menu.html')
      cy.wait(1000);
      cy.get('.start').click();
      cy.wait(1000);
        cy.url().then(url => {
          cy.log('Current URL:', url);
        });
    })
  }) 

describe('Guide Button', () => {
    it('Click Button Guide' , () => {
      cy.wait(1000);
      cy.visit('http://localhost:8000/menu.html')
      cy.wait(1000);
      cy.get('.guide').click();
      cy.wait(1000);
        cy.url().then(url => {
          cy.log('Current URL:', url);
        });
    })
    it('slide game rules guide', () =>{
        cy.wait(1000);
        cy.visit('http://localhost:8000/menu.html')
        cy.wait(1000);
        cy.get('.guide').click();
        cy.wait(1000);
        cy.get('.manual-btn2').click();
        cy.wait(1000);
        cy.get('.manual-btn3').click();
        cy.wait(1000);
        cy.get('.manual-btn4').click();
        cy.wait(1000);
        cy.get('.manual-btn5').click();
        cy.wait(1000);
        cy.get('.manual-btn6').click();
        cy.wait(1000);
        cy.get('.manual-btn7').click();
        cy.wait(1000);
        cy.get('.manual-btn8').click();
        cy.wait(1000);
    });
})   

describe('Mode Game', () => {
    it('Click Mode Classic' , () => {
        cy.wait(1000);
        cy.visit('http://localhost:8000/menu.html')
        cy.wait(1000);
        cy.get('.start').click();
        cy.wait(1000);
        cy.get('.classic').click();
        cy.wait(1000);
          cy.url().then(url => {
            cy.log('Current URL:', url);
          });
      })
      it('Click Mode Countdown' , () => {
        cy.wait(1000);
        cy.visit('http://localhost:8000/menu.html')
        cy.wait(1000);
        cy.get('.start').click();
        cy.wait(1000);
        cy.get('.countdown').click();
        cy.wait(1000);
          cy.url().then(url => {
            cy.log('Current URL:', url);
          });
      })
  
})    
describe('Mode Countdown', () => {
    it('Countdown 3 minute' , () => {
        cy.wait(1000);
        cy.visit('http://localhost:8000/menu.html')
        cy.wait(1000);
        cy.get('.start').click();
        cy.wait(1000);
        cy.get('.countdown').click();
        cy.wait(1000);
        cy.get('.js-settings').click();
        cy.wait(1000);
        cy.get('.button-3minute').click();
        cy.window().then((win) => {
            const { cols, rows, bombs, countdownDuration} = win.game;
            cy.log('Cols:', cols);
            cy.log('Rows:', rows);
            cy.log('Bombs:', bombs);
            cy.log('Time: ',countdownDuration);
          });
        cy.wait(6000);
    })
    it('Countdown 7 minute' , () => {
        cy.wait(1000);
        cy.visit('http://localhost:8000/menu.html')
        cy.wait(1000);
        cy.get('.start').click();
        cy.wait(1000);
        cy.get('.countdown').click();
        cy.wait(1000);
        cy.get('.js-settings').click();
        cy.wait(1000);
        cy.get('.button-7minute').click();
        cy.window().then((win) => {
            const { cols, rows, bombs, countdownDuration} = win.game;
            cy.log('Cols:', cols);
            cy.log('Rows:', rows);
            cy.log('Bombs:', bombs);
            cy.log('Time: ',countdownDuration);
          });
        cy.wait(6000);
    })
    it('Countdown 15 minute' , () => {
        cy.wait(1000);
        cy.visit('http://localhost:8000/menu.html')
        cy.wait(1000);
        cy.get('.start').click();
        cy.wait(1000);
        cy.get('.countdown').click();
        cy.wait(1000);
        cy.get('.js-settings').click();
        cy.wait(1000);
        cy.get('.button-15minute').click();
        cy.window().then((win) => {
            const { cols, rows, bombs, countdownDuration} = win.game;
            cy.log('Cols:', cols);
            cy.log('Rows:', rows);
            cy.log('Bombs:', bombs);
            cy.log('Time: ',countdownDuration);
          });
        cy.wait(6000);
    })  
  }) 
