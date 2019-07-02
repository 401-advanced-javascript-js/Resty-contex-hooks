import React from 'react';
// import renderer from 'react-test-renderer';
import App from '../../app';

// import('../../setupTests');

describe('Form Component', () => {
  it('renders', () => {
    const formShallow = global.shallow(<App />);
    expect(formShallow.find('form')).toBeDefined();
  });

  it('url updates', () => {
    // const appMount = global.mount(<App />);
    // const urlInput = appMount.find('input[name=URL]');
    // urlInput.simulate('change', );
  });

  it('method changes', () => {});

  it('snapshot', () => {});
});
