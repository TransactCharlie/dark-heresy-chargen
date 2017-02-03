import React from 'react';
import {HOMEWORLD_DETAILS} from './homeworlds';
import {BACKGROUND_DETAILS} from './backgrounds';
import {ROLE_DETAILS} from './roles';
import {SimpleListChooser} from './standard_components';
import {contains} from './utils';

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

export function gen_possible_characteristic_options(fixed_options)
{
  const selection = CHARACTERISTIC_APTITUDES.map((a) => {
      if (!contains(fixed_options, a))
      {
        return a;
      }
  });

  return selection.filter( (f) => {return f});
}


export class AptitudeForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      homeworld: props.homeworld,
      background: props.background,
      role: props.role,
      aptitudeChoice: props.aptitudeChoice
    };
  }

  handleChange(i, v) {
    const f = "";
  }

  render() {
    var aptitudes = this.props.aptitudeChoice;
    const homeworld = this.props.homeworld;
    const background = this.props.background;
    const role = this.props.role;
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
