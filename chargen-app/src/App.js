import React from 'react';
import './App.css';
import {ChooseHomeworld, ChooseBackground} from './choosers';
import homeworlds from './constants';
import DumpObject from './helpers';


export class App extends React.Component {

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
      characteristic_bonuses: homeworlds[hm].characteristic_bonuses,
      characteristic_weaknesses: homeworlds[hm].characteristic_weaknesses,
      homeworld_aptitudes: homeworlds[hm].aptitudes
    });
  }

  handleBackgroundChange(background) {
    this.setState({background: background});
  }

  render() {
    const homeworld = this.state.homeworld;
    const background = this.state.background;
    const character = this.state;
    return (
      <div>
        <ChooseHomeworld homeworld={homeworld} onChange={this.handleHomeworldChange}/>
        <ChooseBackground background={background} onChange={this.handleBackgroundChange}/>
        <DumpObject payload={character}/>
      </div>
    );
  }
}
