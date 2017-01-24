import React from 'react';
import {SimpleListChooser} from './standard_components';

export const HOMEWORLDS = [
  "FERAL",
  "HIVE",
  "HIGHBORN"
];

export const HOMEWORLD_DETAILS = {
  FERAL: {
    display_text: "Feral World",
    description: "Primitive low tech world where the strong survive and feudal customs are prevalent.",
    characteristic_bonuses: ["STRENGTH", "TOUGHNESS"],
    characteristic_weakness: "INFLUENCE",
    aptitude: "TOUGHNESS",
    bonus: "The Old Ways",
    wounds: 9,
    fate_points: 2,
    fate_roll_target_number: 2
  },
  HIVE: {
    display_text: "Hive World",
    description: "Teeming billions crammed into metal cities.",
    characteristic_bonuses: ["PERCEPTION", "INTELLIGENCE"],
    characteristic_weakness: "TOUGHNESS",
    aptitude: "PERCEPTION",
    bonus: "Moving through Crowds.",
    wounds: 8,
    fate_points: 2,
    fate_roll_target_number: 4
  },
  HIGHBORN: {
    display_text: "Highborn",
    description: "Silver Spoon",
    characteristic_bonuses: ["FELLOWSHIP", "INTELLIGENCE"],
    characteristic_weakness: "TOUGHNESS",
    aptitude: "FELLOWSHIP",
    bonus: "Breeding will out.",
    wounds: 9,
    fate_points: 4,
    fate_roll_target_number: 10
  }
};

export class DisplayHomeworldDetails extends React.Component {
    render() {
        const hm = this.props.homeworld;
        if (hm === "") {return(<div/>);}

        const details = HOMEWORLD_DETAILS[hm];

        return (
            <div>
                <p>{details.description}</p>
                <ul>
                    <li>Wounds: {details.wounds}</li>
                    <li>Fate Points: {details.fate_points}</li>
                    <li>Bonus: {details.bonus}</li>
                    <li>Homeworld Aptitude: {details.aptitude}</li>
                </ul>
            </div>
        );
      }
}


export class HomeworldForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
    this.setState(this.props.homeworldChoice);
  }

  handleChange(index, value) {
    const hm = value;
    const new_state = {
      homeworld: hm,
      characteristic_bonuses: HOMEWORLD_DETAILS[hm].characteristic_bonuses,
      characteristic_weakness: HOMEWORLD_DETAILS[hm].characteristic_weakness,
      homeworld_aptitude: HOMEWORLD_DETAILS[hm].aptitude,
      wounds: HOMEWORLD_DETAILS[hm].wounds,
      fate_points: HOMEWORLD_DETAILS[hm].fate_points
    };
    this.setState(new_state);
    this.props.onChange(new_state);
  }

  render() {
    const hw = this.props.homeworldChoice["homeworld"];
    return (
      <fieldset>
        <legend>Step1: Homeworld</legend>
        <SimpleListChooser
          selected={hw}
          index={null}
          choices={HOMEWORLDS}
          onChange={this.handleChange}
          defaultLabel={"--- Choose a Homeworld ---"}
        />
      <DisplayHomeworldDetails homeworld={hw}/>
      </fieldset>
    );
  }
}
