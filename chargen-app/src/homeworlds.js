import React from 'react';
import {mapObject} from './utils';

export const HOMEWORLDS = {
  FERAL: {
    display_text: "Feral World",
    description: "Primitive low tech world where the strong survive and feudal customs are prevalent.",
    characteristic_bonuses: ["STRENGTH", "TOUGHNESS"],
    characteristic_weaknes: "INFLUENCE",
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
  HIGH: {
    display_text: "Highborn",
    description: "Silver Spoon",
    characteristic_bonuses: ["FELLOWSHIP", "INTELLIGENCE"],
    characteristic_weakness: "TOUGHNESS",
    aptitude: "FELLOWSHIP",
    wounds: 9,
    fate_points: 4,
    fate_roll_target_number: 10
  },
};

export class DisplayHomeworldDetails extends React.Component {
    render() {
        const homeworld = this.props.homeworld;

        if (homeworld) {
            return (
                <div>
                    <p>{HOMEWORLDS[homeworld].description}</p>
                </div>
            );
        }
        return (<div/>);
    }
}


export class ChooseHomeworld extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const homeworld = this.props.homeworld;

    return (
      <fieldset>
        <legend>Choose Homeworld</legend>
        <select value={homeworld} onChange={this.handleChange}>
          <option disabled value="">-- Select Homeworld --</option>

        {mapObject(HOMEWORLDS, function(k,v) {
          return <option key={k} value={k}>{v.display_text}</option>;
         })}
        </select>
        <DisplayHomeworldDetails homeworld={homeworld}/>
      </fieldset>
    );
  }
}
