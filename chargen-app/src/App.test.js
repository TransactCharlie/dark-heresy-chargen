import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {ChooseBackground, ChooseHomeworld} from './choosers';
import {PrintObject} from './helpers';

function stub_on_change(val) {
	return val;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('simplest combined renders', () => {
    const div = document.createElement('div');
    const testobj = {foo:"bar"}
    ReactDOM.render(
      <div>
        <ChooseHomeworld homeworld={""} onChange={stub_on_change}/>
        <ChooseBackground background={""} onChange={stub_on_change}/>
        <PrintObject payload={testobj}/>
      </div>
    , div);
})