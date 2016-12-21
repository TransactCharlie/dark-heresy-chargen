import React from 'react';
import {mapObject} from './utils';

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
