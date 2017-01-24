import React from 'react';
import {SimpleChooser, SimpleListChooser} from './standard_components';

export const ROLES = [
  "ASSASSIN",
  "CHIRURGEON"
]
export const ROLE_DETAILS = {
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
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      role: props.role,
      aptitudes: props.aptitudes
    };
  }

  handleChange(index, value) {
    var aps = this.props.aptitudes;
    aps[index] = value;
    var new_state = {aptitudes: aps};
    this.setState(new_state);
    this.props.onChange(aps);
  }

  render() {
    const role = this.props.role;

    if (role === "") {return <div/>; }

    const aptitudes = this.props.aptitudes;
    const choices = ROLE_DETAILS[role]["aptitudes"]

    return (
      <div><ul>
          {choices.map((option, index) => {
            if (option.length > 1) {
              return <li><SimpleListChooser
                selected={aptitudes[index]}
                index={index}
                choices={option}
                onChange={this.handleChange}
                defaultLabel={"--- Choose an Aptitude ---"}
                /></li>;
            }
            else {
              return <li>{option}</li>;
            }
          })}
      </ul></div>
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

    const aptitudes = ROLE_DETAILS[new_role].aptitudes;

    const new_state = {
      role: new_role,
      aptitudes: aptitudes.map((ap) => {
        return ap.length === 1 ? ap[0] : "";
      })
    };
    this.setState(new_state);
    this.props.onChange(new_state);
  }

  handleAptitudeChange(new_aptitudes) {
    const new_state = {
      role: this.state.role,
      aptitudes: new_aptitudes
    }
    this.setState(new_state);
    this.props.onChange(new_state);
  }

  render() {
    const role = this.props.roleChoice.role;
    const role_aptitudes = this.props.roleChoice.aptitudes;

    return (
      <fieldset>
        <legend>Choose Role</legend>
        <SimpleChooser selected={role} choices={ROLES} onChange={this.handleRoleChange} defaultLabel={"--- Choose Role ---"}/>
        <AptitudeForm aptitudes={role_aptitudes} role={role} onChange={this.handleAptitudeChange}/>
      </fieldset>
    );
  }
}
