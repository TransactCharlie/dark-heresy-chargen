import React from 'react';
import './App.css';
import {ChooseBackground} from './backgrounds';
import {ChooseHomeworld, HOMEWORLDS} from './homeworlds';
import {PrintObject} from './utils';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleHomeworldChange = this.handleHomeworldChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);

    this.state = {
      homeworld: "",
      homeworld_aptitude: null,
      characteristic_bonuses: [],
      characteristic_weakness: null,
      wounds: null,
      fate_points: null,
      background: {
          chosen_background: null,
          chosen_aptitude: null
      }
        };
  }

  handleHomeworldChange(hm) {
    this.setState({
      homeworld: hm,
      characteristic_bonuses: HOMEWORLDS[hm].characteristic_bonuses,
      characteristic_weakness: HOMEWORLDS[hm].characteristic_weakness,
      homeworld_aptitude: HOMEWORLDS[hm].aptitude,
      wounds: HOMEWORLDS[hm].wounds,
      fate_points: HOMEWORLDS[hm].fate_points
    });
  }

  handleBackgroundChange(bg) {
    this.setState({background: bg});
  }

  render() {
    const homeworld = this.state.homeworld;
    const background = this.state.background;
    const character = this.state;
    return (
        <div>
            <ChooseHomeworld homeworld={homeworld} onChange={this.handleHomeworldChange}/>
            <ChooseBackground background={background.chosen_background} onChange={this.handleBackgroundChange}/>
            <PrintObject payload={character}/>
        </div>
    );
//    return (<ChooseBackground background={background} onChange={this.handleBackgroundChange}/>);
  }
}
