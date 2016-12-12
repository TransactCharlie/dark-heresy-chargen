import React from 'react';
import {mapObject} from './utils';
import {roles, aptitudes} from './enums';

const ROLE_DETAILS = {
  ASSASSIN: {
    set_aptitudes: [
      aptitudes.AGILITY,
      aptitudes.FIELDCRAFT,
      aptitudes.FINESSE,
      aptitudes.PERCEPTION
    ],
    aptitude_choices: [
      [aptitudes.BALLISTIC_SKILL, aptitudes.WEAPON_SKILL]
    ]
  },
  CHIRURGEON: {
    set_aptitudes: [
      aptitudes.FIELDCRAFT,
      aptitudes.INTELLIGENCE,
      aptitudes.KNOWLEDGE,
      aptitudes.STRENGTH,
      aptitudes.TOUGHNESS
    ],
    aptitude_choices: []
  }
};

export class ChooseRole extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    const new_role = e.target.value;
    this.props.onChange(new_role);
  }

  render() {
    const role = this.props.role;

    return (
      <select value={role} onChange={this.handleChange}>
        <option disabled value="">-- Select Role --</option>
        {mapObject(roles, function(k,v) {
          return <option key={k} value={v}>{v}</option>;
        })}
      </select>
    );
  }
}
