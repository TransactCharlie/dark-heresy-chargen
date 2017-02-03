import React from 'react';
import './App.css';
import {ChooseBackground, BACKGROUND_DETAILS} from './backgrounds';
import {HomeworldForm} from './homeworlds';
import {RoleForm, ROLE_DETAILS} from './roles';
import {AptitudeForm, gen_possible_characteristic_options} from './aptitudes';
import {PrintObject, contains, onlyUnique} from './utils';


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
      aptitude_caclulated_legal_options: [[], [], [], [], [], [], []],
      selected_aptitudes: [null, null, null, null, null, null, null]
    };
  }

  handleHomeworldChange(hm) {
    var copy_state = Object.create(this.state);
    copy_state["homeworldChoice"] = hm;
    copy_state["aptitude_base_options"][0] = [hm.homeworld_aptitude];
    copy_state["aptitude_caclulated_legal_options"] = this.calculate_legal_options(copy_state["aptitude_base_options"]);
    this.setState(copy_state);
  }

  handleBackgroundChange(bg) {
    var copy_state = Object.create(this.state);
    copy_state["backgroundChoice"] = bg;
    copy_state["aptitude_base_options"][1] = BACKGROUND_DETAILS[bg.background].aptitudes
    copy_state["aptitude_caclulated_legal_options"] = this.calculate_legal_options(copy_state["aptitude_base_options"]);
    this.setState(copy_state);
  }

  handleRoleChange(rl) {
    var copy_state = Object.create(this.state);
    copy_state["roleChoice"] = rl;
    for (var i = 2; i <= 6; i++)
    {
      copy_state["aptitude_base_options"][i] = ROLE_DETAILS[rl.role].aptitudes[i-2]
    }
    copy_state["aptitude_caclulated_legal_options"] = this.calculate_legal_options(copy_state["aptitude_base_options"]);
    this.setState(copy_state);
  }

  calculate_legal_options(options)
  {
    // Calculate the list os possible choices based on an initial list of options

    var set_aptitudes = [];
    var final_legal_options = [[], [], [], [], [], [], []];
    var deferred_single_option_queue = [];
    var deferred_multi_option_queue = [];
    for (var i = 0; i < options.length; i++)
    {
      // Consider those options where we have a single choice
      var cur_option = options[i];

      if (cur_option.length === 1)
      {
        // Do we already have this option in our set aptitudes?
        if (contains(set_aptitudes, cur_option[0]))
        {
          // Delay this processing until we've passed all the other base options
          // generate list of possible options
          deferred_single_option_queue.push(i)
        }
        else {
          set_aptitudes.push(cur_option[0]);
          final_legal_options[i] = cur_option[0];
        }
      }
      else {
        // deferr the multiple choice until we've passed the single options
        deferred_multi_option_queue.push(i);
      }
    }

    // We've been through the list once and set up the base unconflicting elements
    // now set the problematic single choices
    for (var i = 0; i < deferred_single_option_queue.length; i++)
    {
      var aptitude_index = deferred_single_option_queue[i];
      var possibles = gen_possible_characteristic_options(set_aptitudes);
      final_legal_options[aptitude_index] = possibles;
    }

    // Work out the multiple options now
    for (var i = 0; i < deferred_multi_option_queue.length; i++)
    {
      var aptitude_index = deferred_multi_option_queue[i];
      var options_to_consider = options[aptitude_index];
      var pos_options = [];
      for ( var j = 0; j < options_to_consider.length; j++)
      {
        if (contains(set_aptitudes, options_to_consider[j]))
        {
          pos_options = pos_options.concat(gen_possible_characteristic_options(set_aptitudes));
        }
        else {
          pos_options.push(options_to_consider[j])
        }
      }
      final_legal_options[aptitude_index] = pos_options.filter(onlyUnique);
    }

    return final_legal_options;
  }

  handleAptitudeChange(ac) {
    this.setState({aptitudeChoice: ac});
  }

  render() {
    const homeworldChoice = this.state.homeworldChoice;
    const backgroundChoice = this.state.backgroundChoice;
    const roleChoice = this.state.roleChoice;
    const aptitudeChoice = this.state.aptitude_base_options;
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
