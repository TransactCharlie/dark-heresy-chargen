import React from 'react';
import './App.css';
import {ChooseBackground, BACKGROUND_DETAILS} from './backgrounds';
import {HomeworldForm} from './homeworlds';
import {RoleForm, ROLE_DETAILS} from './roles';
import {AptitudeForm} from './aptitudes';
import {PrintObject} from './utils';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleHomeworldChange = this.handleHomeworldChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);

    this.state = {
      homeworldChoice: {
        homeworld: "",
        homeworld_aptitude: null,
        characteristic_bonuses: [],
        characteristic_weakness: null,
        wounds: null,
        fate_points: null,
      },
      backgroundChoice: {
        background: "",
        aptitude: ""
      },
      roleChoice: {
        "role": "",
        "aptitudes": ["","","","",""]
      },
      aptitude_base_options: [[], [], [], [], [], [], []],
      aptitude_calculated_options: [[], [], [], [], [], [], []],
      selected_aptitudes: [null, null, null, null, null, null, null]
    };
  }

  handleHomeworldChange(hm) {
    var copy_state = Object.create(this.state);
    copy_state["homeworldChoice"] = hm;
    copy_state["aptitude_base_options"][0] = [hm.homeworld_aptitude];
    this.setState(copy_state);
  }

  handleBackgroundChange(bg) {
    var copy_state = Object.create(this.state);
    copy_state["backgroundChoice"] = bg;
    copy_state["aptitude_base_options"][1] = BACKGROUND_DETAILS[bg.background].aptitudes
    this.setState(copy_state);
  }

  handleRoleChange(rl) {
    var copy_state = Object.create(this.state);
    copy_state["roleChoice"] = rl;
    for (var i = 2; i <= 6; i++)
    {
      copy_state["aptitude_base_options"][i] = ROLE_DETAILS[rl.role].aptitudes[i-2]
    }
    this.setState(copy_state);
  }

  handleAptitudeChange(ac) {
    this.setState({aptitudeChoice: ac});
  }

  render() {
    const homeworldChoice = this.state.homeworldChoice;
    const backgroundChoice = this.state.backgroundChoice;
    const roleChoice = this.state.roleChoice;
    const aptitudeChoice = this.state.aptitudeChoice;
    const character = this.state;
    return (
        <div>
          <HomeworldForm homeworldChoice={homeworldChoice} onChange={this.handleHomeworldChange}/>
          <ChooseBackground backgroundChoice={backgroundChoice} onChange={this.handleBackgroundChange}/>
          <RoleForm roleChoice={roleChoice} onChange={this.handleRoleChange}/>
          <AptitudeForm
            role={roleChoice.role}
            background={backgroundChoice.background}
            homeworld={homeworldChoice.homeworld}
            aptitudeChoice={aptitudeChoice}
          />
        <PrintObject payload={character}/>
        </div>
    );
  }
}
