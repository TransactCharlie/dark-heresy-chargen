import React from 'react';
import ReactDOM from 'react-dom';

import {ChooseRole} from '../roles';

function stub_on_change(val) {
	return val;
}

it('ChooseBackground without crashing', () => {
  const div = document.createElement('div');
  const testval={background: "", aptitude: ""};

  ReactDOM.render(
    <ChooseRole role={testval} onChange={stub_on_change}/>,
    div
  );
});
