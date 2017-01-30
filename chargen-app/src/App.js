import React from 'react';
import './App.css';
import {ChooseBackground} from './backgrounds';
import {HomeworldForm} from './homeworlds';
import {RoleForm} from './roles';
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
      }
      };
  }

  handleHomeworldChange(hm) {
    this.setState({homeworldChoice: hm});
  }

  handleBackgroundChange(bg) {
    this.setState({backgroundChoice: bg});
  }

  handleRoleChange(rl) {
    this.setState({roleChoice: rl});
  }

  render() {
    const homeworldChoice = this.state.homeworldChoice;
    const backgroundChoice = this.state.backgroundChoice;
    const roleChoice = this.state.roleChoice;
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
          />
          <PrintObject payload={character}/>
        </div>
    );
  }
}
