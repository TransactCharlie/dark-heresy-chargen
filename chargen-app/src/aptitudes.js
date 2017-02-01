import React from 'react';
import {HOMEWORLD_DETAILS} from './homeworlds';
import {BACKGROUND_DETAILS} from './backgrounds';
import {ROLE_DETAILS} from './roles';
import {SimpleListChooser} from './standard_components';

const CHARACTERISTIC_APTITUDES = [
  "STRENGTH",
  "PERCEPTION",
  "AGILITY",
  "TOUGHNESS",
  "WEAPON_SKILL",
  "BALLISTIC_SKILL",
  "INTELLIGENCE",
  "FELLOWSHIP",
  "INFLUENCE",
  "WILLPOWER"
];

export class AptitudeForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      homeworld: props.homeworld,
      background: props.background,
      role: props.role
    };
  }

  generate_aptitude_choices(choices, selected_aptitudes) {
    // check that none of the choices are in the selected_aptitudes
    // If they are substitute that choice for the CHARACTERISTIC_APTITUDES
    // ( - any selected chracterstic Aptitudes)
    const valid_characteristic_aptitudes = CHARACTERISTIC_APTITUDES.map((a) => {
      if (a in selected_aptitudes)
      {
        return a;
      }
    });
    return valid_characteristic_aptitudes;
  }

  handleChange(i, v) {
    const f = "";
  }

  render() {
    const homeworld = this.props.homeworld;
    const role = this.props.role;
    const background = this.props.background;

    const hw_details = ( homeworld === "" ? [] : [HOMEWORLD_DETAILS[homeworld].aptitude])
    const bk_details = ( background === "" ? [] : BACKGROUND_DETAILS[background].aptitudes)
    const rl_details = ( role === "" ? [] : ROLE_DETAILS[role].aptitudes)

    const aptitudes = [].concat(hw_details, bk_details, rl_details);

    return (
      <div>
        <fieldset>
          <legend>Determine Aptitudes</legend>
          <p>Homeworld: {homeworld}, Background: {background}, Role: {role}</p>
          <ul>
            { aptitudes.map( (a) => {
              return (<li>{a}</li>);
            })}
          </ul>
        </fieldset>
      </div>
    );
  }
  }
