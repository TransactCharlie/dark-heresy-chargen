import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChooseBackground} from './backgrounds';
import {ChooseHomeworld} from './homeworlds';
import {PrintObject} from './utils';

function stub_on_change(val) {
	return val;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('simplest combined renders', () => {
    const div = document.createElement('div');
		const backgroundChoice = {
			background: "",
			aptitude: ""
		};
    ReactDOM.render(
      <div>
        <ChooseHomeworld homeworld={""} onChange={stub_on_change}/>
        <ChooseBackground backgroundChoice={backgroundChoice} onChange={stub_on_change}/>
      </div>
    , div);
})
