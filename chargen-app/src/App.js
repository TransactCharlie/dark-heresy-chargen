import React from 'react';
import './App.css';
import {ChooseBackground, BACKGROUND_DETAILS} from './backgrounds';
import {HomeworldForm} from './homeworlds';
import {RoleForm, ROLE_DETAILS} from './roles';
import {AptitudeForm, calculate_selected_aptitudes, calculate_legal_options} from './aptitudes';
import {PrintObject} from './utils';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleHomeworldChange = this.handleHomeworldChange.bind(this);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleAptitudeChange = this.handleAptitudeChange.bind(this);

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
      aptitude_caclulated_legal_options: [[], [], [], [], [], [], []],
      selected_aptitudes: ["", "", "", "", "", "", ""]
    };
  }

  handleHomeworldChange(hm) {
    var copy_state = Object.create(this.state);
    copy_state["homeworldChoice"] = hm;
    copy_state["aptitude_base_options"][0] = [hm.homeworld_aptitude];

    const legal_options = calculate_legal_options(copy_state["aptitude_base_options"]);
    const selections = copy_state["selected_aptitudes"];
    // Clear Homeworld Selection
    selections[0] = "";

    copy_state["aptitude_caclulated_legal_options"] = legal_options;
    copy_state["selected_aptitudes"] = calculate_selected_aptitudes(legal_options, selections)
    this.setState(copy_state);
  }

  handleBackgroundChange(bg) {
    var copy_state = Object.create(this.state);
    copy_state["backgroundChoice"] = bg;
    copy_state["aptitude_base_options"][1] = BACKGROUND_DETAILS[bg.background].aptitudes

    const legal_options = calculate_legal_options(copy_state["aptitude_base_options"]);
    const selections = copy_state["selected_aptitudes"];
    // Clear Background selections
    selections[1] = "";

    copy_state["aptitude_caclulated_legal_options"] = legal_options;
    copy_state["selected_aptitudes"] = calculate_selected_aptitudes(legal_options, selections)
    this.setState(copy_state);
  }

  handleRoleChange(rl) {
    var copy_state = Object.create(this.state);
    copy_state["roleChoice"] = rl;
    for (var i = 2; i <= 6; i++)
    {
      copy_state["aptitude_base_options"][i] = ROLE_DETAILS[rl.role].aptitudes[i-2]
    }
    const legal_options = calculate_legal_options(copy_state["aptitude_base_options"]);
    const selections = copy_state["selected_aptitudes"];
    // Clear Role selections
    selections[2] = "";
    selections[3] = "";
    selections[4] = "";
    selections[5] = "";
    selections[6] = "";

    copy_state["aptitude_caclulated_legal_options"] = legal_options;
    copy_state["selected_aptitudes"] = calculate_selected_aptitudes(legal_options, selections)
    this.setState(copy_state);
  }

  handleAptitudeChange(selections) {
    var copy_state = Object.create(this.state);
    // Write new selection
    copy_state.selected_aptitudes = selections;

    // Work out if this changes our legal options.
    // TODO - this is busted -- calculate_legal_options needs to cnsider selections. Or there needs to be an additional filter applied.
    copy_state.aptitude_caclulated_legal_options = calculate_legal_options()
    copy_state.selected_aptitudes = calculate_selected_aptitudes(copy_state.aptitude_caclulated_legal_options, selections)

    this.setState(copy_state);
  }

  render() {
    const homeworldChoice = this.state.homeworldChoice;
    const backgroundChoice = this.state.backgroundChoice;
    const roleChoice = this.state.roleChoice;

    const aptitude_options = this.state.aptitude_caclulated_legal_options;
    const aptitude_selections = this.state.selected_aptitudes;

    const character = this.state;
    return (
        <div>
          <HomeworldForm homeworldChoice={homeworldChoice} onChange={this.handleHomeworldChange}/>
          <ChooseBackground backgroundChoice={backgroundChoice} onChange={this.handleBackgroundChange}/>
          <RoleForm roleChoice={roleChoice} onChange={this.handleRoleChange}/>
          <AptitudeForm
            aptitudeOptions = {aptitude_options}
            aptitudeSelections = {aptitude_selections}
            onChange = {this.handleAptitudeChange}
          />
        <PrintObject payload={character}/>
        </div>
    );
  }
}
