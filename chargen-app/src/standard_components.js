import React from 'react';
import {mapObject} from './utils';

export class SimpleListChooser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      index: props.index,
      choices: props.choices,
      defaultLabel: props.defaultLabel
    };
  }

  handleChange(entity) {
    this.props.onChange(this.props.index, entity.target.value);
  }

  render() {
    const selected = this.props.selected;
    const index = this.state.index;
    const defaultLabel = this.state.defaultLabel;
    const choices = this.state.choices;

    return (
      <select value={selected} onChange={this.handleChange}>
        <option disabled value="">{defaultLabel}</option>
        {
          choices.map((v) => {
            return <option key={v} value={v}>{v}</option>;
          })
        }
      </select>
    );
  }
}

export class SimpleChooser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(entity) {
    this.props.onChange(entity.target.value);
  }

  render() {
    const selected = this.props.selected;
    const defaultLabel = this.props.defaultLabel;
    const choices = this.props.choices;

    return (
      <select value={selected} onChange={this.handleChange}>
        <option disabled value="">{defaultLabel}</option>
        {mapObject(choices, function(k,v) {
          return <option key={k} value={v}>{v}</option>;
        })}
      </select>
    );
  }
}
