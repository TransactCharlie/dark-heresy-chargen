import React from 'react';
import ReactDOM from 'react-dom';

import {SimpleChooser} from '../standard_components';

function stub_on_change(val) {
	return val;
}

it('SimpleChooser without crashing', () => {
  const div = document.createElement('div');
  const choices = {FOO: "Foo", BAR: "Bar"};

  ReactDOM.render(
    <SimpleChooser choices={choices} selected="" defaultLabel={"std"} onChange={stub_on_change}/>,
    div
  );
});
