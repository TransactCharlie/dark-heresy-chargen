import React from 'react';

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
        <legend> Choose Homeworld</legend>
        <select value={homeworld} onChange={this.handleChange}>
          <option disabled selected value="">-- Select Homeworld --</option>
          <option value="FERAL">Feral World</option>
          <option value="HIVE">Hive World</option>
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
          <option disabled selected value="">-- Select Background --</option>
          <option value="OUTCAST">Outcast</option>
          <option value="GUARDSMAN">Imperial Guard</option>
        </select>
      </fieldset>
    );
  }
}
