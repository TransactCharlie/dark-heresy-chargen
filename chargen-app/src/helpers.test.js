import React from 'react';
import ReactDOM from 'react-dom';

import {PrintObject} from './helpers';


it('PrintObject without crashing', () => {
  const div = document.createElement('div');
  const testobj={foo:"bar"};
  ReactDOM.render(<PrintObject payload={testobj}/>, div);
});

