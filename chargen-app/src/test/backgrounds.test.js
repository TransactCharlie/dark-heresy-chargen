import React from 'react';
import ReactDOM from 'react-dom';

import {ChooseBackground} from '../backgrounds';

function stub_on_change(val) {
	return val;
}

it('ChooseBackground without crashing', () => {
  const div = document.createElement('div');
  const testval={background: "", aptitude: ""};

  ReactDOM.render(<ChooseBackground
		backgroundChoice={testval}
		onChange={stub_on_change}/>, div);
});
