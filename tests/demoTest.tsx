import path from 'path';
import glob from 'glob';
import Enzyme from './setup';

const { render } = Enzyme;

function demoTest(component: string) {
  const files = glob.sync(
    path.resolve(__dirname, `../packages/concis-react/src/${component}/demos/*.tsx`)
  );
  files.shift();
  if (component === 'Modal') {
    files.splice(5, 2);
  }
  describe(`${component} demo`, () => {
    files.forEach((file, index) => {
      it(`render ${component} demo ${index + 2} correctly`, () => {
        const demo = require(file).default;
        const component = render(demo);
        expect(component).toMatchSnapshot();
      });
    });
  });
}

export default demoTest;
