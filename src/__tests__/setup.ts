import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = new JSDOM(``).window;

global.document = document;
global.window = window;

Enzyme.configure({
  adapter: new Adapter(),
});

export default Enzyme;
