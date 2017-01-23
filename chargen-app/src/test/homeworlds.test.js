import React from 'react';
import ReactDOM from 'react-dom';

import {HomeworldForm} from '../homeworlds';

function stub_on_change(val) {
	return val;
}

it('ChooseHomeworld without crashing', () => {
  const div = document.createElement('div');
  const testval = {
    homeworld: "",
    homeworld_aptitude: null,
    characteristic_bonuses: [],
    characteristic_weakness: null,
    wounds: null,
    fate_points: null,
  };
  ReactDOM.render(<HomeworldForm homeworldChoice={testval} onChange={stub_on_change}/>, div);
});
