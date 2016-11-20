import React from 'react';
import ReactDOM from 'react-dom';

import {ChooseHomeworld, ChooseBackground} from './choosers';


function stub_on_change(val) {
	return val;
}

it('ChooseHomeworld without crashing', () => {
  const div = document.createElement('div');
  const testval="";
  ReactDOM.render(<ChooseHomeworld homeworld={testval} onChange={stub_on_change}/>, div);
});


it('ChooseBackground without crashing', () => {
  const div = document.createElement('div');
  const testval="";
  ReactDOM.render(<ChooseBackground background={testval} onChange={stub_on_change}/>, div);
});

it('ChoosersCombined', () => {
   const div = document.createElement('div');
   const testval="";
   ReactDOM.render(
   <div>
    <ChooseHomeworld homeworld={testval} onChange={stub_on_change}/>
    <ChooseBackground background={testval} onChange={stub_on_change}/>
   </div>
   , div);
});