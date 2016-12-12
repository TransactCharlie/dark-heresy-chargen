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

  handleChange(entity) {
    const new_role = entity.target.value;
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

export class AptitudeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {role: props.role};
  }

  render() {
    const role = this.props.role;
    if (role === "") {
      return (<div>role: {role}</div>);
    }

    const aptitude_choice = ROLE_DETAILS[role].set_aptitudes;

    return (
      <div>
        <p>role: {role}</p>
        <ul>
          {aptitude_choice.map(function(lv){return <li>{lv}</li>;})}
        </ul>
      </div>
    );
  }
}


export class RoleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.roleChoice;
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleAptitudeChange = this.handleAptitudeChange.bind(this);
  }

  handleRoleChange(new_role) {
    const new_state = {role: new_role};
    this.setState(new_state);
    this.props.onChange(new_state);
  }

  handleAptitudeChange(ap) {
    const f = "";
  }

  render() {
    const rc = this.props.roleChoice;
    const role = rc.role;

    return (
      <fieldset>
        <legend>Choose Role</legend>
        <ChooseRole role={role} onChange={this.handleRoleChange}/>
        <AptitudeForm role={role} onChange={this.handleAptitudeChange}/>
      </fieldset>
    );
  }
}
