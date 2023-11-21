/*var Game = require('./emoji-minesweeper-gh-pages/game')
var easyButtonClick = require('./emoji-minesweeper-gh-pages/start')
*/

/*describe('Value', () => {
  test('easyButtonClick sets cols, rows, and bombs to 8, 10, and 10', () => {
  var value = easyButtonClick();
    expect(value).toBe(true);
  });
});
*/
//-----------------------
/*
describe('Easy Button Click', () => {
  test('should create a new game with easy settings', () => {
    // Create a mock HTML structure
    document.body.innerHTML = `
      <div>
        <input id="emojiset" value="🐣 💣 🚧 ◻️">
        <input id="twemoji" type="radio" checked>
        <button class="button-easy">Easy</button>
      </div>
    `;
    var value = easyButtonClick();
    // Call the function to test
    easyButtonClick();

    // Your assertions go here
    // For example, you can assert that a new game with easy settings is created
    expect(value instanceof Game).toBe(true);
  });
});
//-------------------------
*/

//const { JSDOM } = require('jsdom');
//const dom = new JSDOM('<!doctype html><html><body></body></html>');
//global.document = dom.window.document;
///////////////////////////////////////////////////
/*
describe('Value', () => {
  test('easyButtonClick sets cols, rows, and bombs to 8, 10, and 10', () => {
  var value = easyButtonClick();
    expect(value).toBe(true);
  });
});*/
//////////////////////////////////////////////////
// jest.mock('./emoji-minesweeper-gh-pages/start', () => {
//   return {
//     ...jest.requireActual('./emoji-minesweeper-gh-pages/start'), // use the actual module implementation
//     document: {
//       getElementById: jest.fn(),
//       querySelector: jest.fn(),
//     },
//   };
// });

// Mocking Game class
// jest.mock('./emoji-minesweeper-gh-pages/start', () => {
//   return jest.fn().mockImplementation(() => ({
//     // Mock the necessary methods or properties of the Game class if needed
//   }));
// });

/*describe('Button Click Test', () => {
  let dom;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__di rname, 'emoji-minesweeper-gh-pages/index.html'), 'utf8');
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    global.document = dom.window.document;
    global.window = dom.window;
  });

  afterAll(() => {
    dom.window.close();
  });

  test('Button click into setting', () => {
    const button = document.querySelector('.js-settings');
    button.click();
    // Assert the expected behavior after the click
    // Add your assertions here
  });

  test('Button click into EasyMode', () => {
    const button = document.querySelector('.button-easy');
    button.click();
    // Add your assertions here
  });

  test('Button click into NormalMode', () => {
    const button = document.querySelector('.button-normal');
    button.click();
    // Add your assertions here
  });

  test('Button click into HardMode', () => {
    const button = document.querySelector('.button-hard');
    button.click();
    // Add your assertions here
  });

  test('Button click into Custom', () => {
    const button = document.querySelector('.button-custom');
    button.click();
    // Add your assertions here
  });
});*/
