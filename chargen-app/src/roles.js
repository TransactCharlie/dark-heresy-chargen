import React from 'react';
import {roles, aptitudes} from './enums';
import {SimpleChooser} from './standard_components';

const ROLE_DETAILS = {
  ASSASSIN: {
    "aptitudes": [
      ["AGILITY"],
      ["FIELDCRAFT"],
      ["FINESSE"],
      ["PERCEPTION"],
      ["BALLISTIC_SKILL", "WEAPON_SKILL"]
    ]
  },
  CHIRURGEON: {
    "aptitudes": [
      ["FIELDCRAFT"],
      ["INTELLIGENCE"],
      ["KNOWLEDGE"],
      ["STRENGTH"],
      ["TOUGHNESS"]
    ]
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

<<<<<<< HEAD
    const role_aptitudes = ROLE_DETAILS[role].aptitudes;

    return (
      <div>
        <p>role: {role}</p>
        <ul>
          {role_aptitudes.map(function(lv){return <li>{lv}</li>;})}
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
