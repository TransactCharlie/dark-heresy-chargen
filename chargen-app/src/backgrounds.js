import React from 'react';
import {mapObject} from './utils';

const BACKGROUNDS = {
    OUTCAST: {
        display_text: "Outcast",
        aptitude_choice: ["SOCIAL", "FIELDCRAFT"]
    },
    IMPERIAL_GUARD: {
        display_text: "Imperial Guard",
        aptitude_choice: ["FIELDCRAFT", "LEADERSHIP"]
    }
};


export class ChooseBackground extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const background = this.props.background;

    return (
      <fieldset>
        <legend>Choose Background</legend>
        <select value={background} onChange={this.handleChange}>
          <option disabled value="">-- Select Background --</option>

          {mapObject(BACKGROUNDS, function(k,v) {
            return <option key={k} value={k}>{v.display_text}</option>;
           })}
        </select>
      </fieldset>
    );
  }
}
