import React from 'react';
import {BACKGROUNDS, HOMEWORLDS} from './constants';


function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

export class ChooseHomeworld extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const homeworld = this.props.homeworld;

    return (
      <fieldset>
        <legend>Choose Homeworld</legend>
        <select value={homeworld} onChange={this.handleChange}>
          <option disabled value="">-- Select Homeworld --</option>

        {mapObject(HOMEWORLDS, function(k,v) {
          return <option key={k} value={k}>{v.display_text}</option>;
         })}
        </select>
      </fieldset>
    );
  }
}

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
