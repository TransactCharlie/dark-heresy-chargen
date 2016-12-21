import React from 'react';
import {roles, aptitudes} from './enums';
import {SimpleChooser} from './standard_components';

const ROLE_DETAILS = {
  ASSASSIN: {
    set_aptitudes: [
      aptitudes.AGILITY,
      aptitudes.FIELDCRAFT,
      aptitudes.FINESSE,
      aptitudes.PERCEPTION
    ],
    aptitude_choices: [
      {
        BALLISTIC_SKILL: aptitudes.BALLISTIC_SKILL,
        WEAPON_SKILL: aptitudes.WEAPON_SKILL
      }
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

export class AptitudeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {role: props.role};
  }

  handleChange{t} {const f ="";}

  render() {
    const role = this.props.role;
    if (role === "") {
      return (<div>role: {role}</div>);
    }

    const set_aptitudes = ROLE_DETAILS[role].set_aptitudes;
    const choose_aptitudes = ROLE_DETAILS[role].aptitude_choices;

    return (
      <div>
        <p>role: {role}</p>
        <ul>
          {set_aptitudes.map(function(lv){return <li>{lv}</li>;})}
          {choose_aptitudes.map(
            function(c) {
              return
                <li>
                  <SimpleChooser selected={""} choices={c} onChange={this.handleAptitudeChange} defaultLabel={"-"}/>
                </li>;})}
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
        <SimpleChooser selected={role} choices={roles} onChange={this.handleRoleChange} defaultLabel={"--- Choose Role ---"}/>
        <AptitudeForm role={role} onChange={this.handleAptitudeChange}/>
      </fieldset>
    );
  }
}
