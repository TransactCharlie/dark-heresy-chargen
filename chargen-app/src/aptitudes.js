import React from 'react';
import {HOMEWORLD_DETAILS} from './homeworlds';
import {BACKGROUND_DETAILS} from './backgrounds';
import {ROLE_DETAILS} from './roles';
import {SimpleListChooser} from './standard_components';
import {contains, onlyUnique} from './utils';

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

export function calculate_legal_options(options)
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
        final_legal_options[i] = [cur_option[0]];
      }
    }
    else {
      // deferr the multiple choice until we've passed the single options
      deferred_multi_option_queue.push(i);
    }
  }

  // We've been through the list once and set up the base unconflicting elements
  // now set the problematic single choices
  const characteristic_aptitudes = gen_possible_characteristic_options(set_aptitudes);
  for (var i = 0; i < deferred_single_option_queue.length; i++)
  {
    var aptitude_index = deferred_single_option_queue[i];
    final_legal_options[aptitude_index] = characteristic_aptitudes;
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
        pos_options = pos_options.concat(characteristic_aptitudes);
      }
      else {
        pos_options.push(options_to_consider[j])
      }
    }
    final_legal_options[aptitude_index] = pos_options.filter(onlyUnique);
  }

  return final_legal_options;
}

export function calculate_selected_aptitudes(possibles, selected)
{
  var return_options=["", "", "", "", "", "", ""];

  // Work out if the selected list needs to change based on changes
  // to the possible options

  // how many possible options do we have?
  const possible_length = possibles.length;

  var deferred_index_queue = [];
  // Set any selected entries to the corrosponding single choice selected
  for (var i = 0; i < possibles.length; i++)
  {
    if (possibles[i].length === 1)
    {
      return_options[i] = possibles[i][0];
    }
    else
    {
      deferred_index_queue.push(i);
    }
  }

  // Now consider any previously selected options where we have choices
  for (var i = 0; i < deferred_index_queue.length; i++)
  {
    const index = deferred_index_queue[i];
    const possible_aptitudes = possibles[index];
    const selected_aptitude = selected[index];

    if ( contains(possible_aptitudes, selected_aptitude) )
    {
      return_options[index] = selected_aptitude;
    }
  }
  return return_options;
}


export class AptitudeForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(i, v) {
    var selections = this.props.aptitudeSelections;
    selections[i] = v;
    this.props.onChange(selections);
  }

  render() {
    const aptitude_options = this.props.aptitudeOptions;
    const aptitude_selections = this.props.aptitudeSelections;

    return (
      <div>
        <fieldset>
          <legend>Determine Aptitudes</legend>
            <ul>
              {aptitude_options.map((option, index) => {
                  if (option.length > 1) {
                    return <li key={index}>
                      <SimpleListChooser
                        selected={aptitude_selections[index]}
                        index={index}
                        choices={option}
                        onChange={this.handleChange}
                        defaultLabel={"--- Choose Aptitude ---"}
                        />
                      </li>;
                  }
                  else {
                    return <li key={index}>{option}</li>;
                  }
                })}
            </ul>
        </fieldset>
      </div>
    );
  }
  }
