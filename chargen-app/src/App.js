import React from 'react';
import './App.css';
import {ChooseHomeworld, ChooseBackground} from './choosers';
import {PrintObject} from './helpers';
import {HOMEWORLDS} from './constants';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleHomeworldChange = this.handleHomeworldChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);

    this.state = {
      homeworld: "",
      homeworld_aptitudes: [],
      characteristic_bonuses: [],
      characteristic_weaknesses: [],
      background: ""
    };
  }

  handleHomeworldChange(hm) {
    this.setState({
      homeworld: hm,
      characteristic_bonuses: HOMEWORLDS[hm].characteristic_bonuses,
      characteristic_weaknesses: HOMEWORLDS[hm].characteristic_weaknesses,
      homeworld_aptitudes: HOMEWORLDS[hm].aptitudes
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
        <ChooseBackground background={background} onChange={this.handleBackgroundChange}/>
        <PrintObject payload={character}/>
      </div>
    );
  }
}
