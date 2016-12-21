import React from 'react';
import ReactDOM from 'react-dom';

import {RoleForm} from '../roles';

function stub_on_change(val) {
	return val;
}

it('ChooseBackground without crashing', () => {
  const div = document.createElement('div');
  const testval={"role": ""};

  ReactDOM.render(
		<RoleForm roleChoice={testval} onChange={stub_on_change}/>,
    div
  );
});
