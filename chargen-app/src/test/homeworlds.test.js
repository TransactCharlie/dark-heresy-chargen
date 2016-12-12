import React from 'react';
import ReactDOM from 'react-dom';

import {ChooseHomeworld} from '../homeworlds';

function stub_on_change(val) {
	return val;
}

it('ChooseHomeworld without crashing', () => {
  const div = document.createElement('div');
  const testval="";
  ReactDOM.render(<ChooseHomeworld homeworld={testval} onChange={stub_on_change}/>, div);
});
