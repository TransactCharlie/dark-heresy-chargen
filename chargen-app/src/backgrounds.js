import React from 'react';
import {mapObject, PrintObject} from './utils';

const BACKGROUNDS = {
    OUTCAST: {
        display_text: "Outcast",
        aptitude_choice: ["SOCIAL", "FIELDCRAFT"]
    },
    IMPERIAL_GUARD: {
        display_text: "Imperial Guard",
        aptitude_choice: ["FIELDCRAFT", "LEADERSHIP"]
    }
};

class ChooseBackgroundAptitude extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let val = e.target.value;
        this.props.onChange(val);
    }

    render() {
        const aptitude = this.props.aptitude
        const background = this.props.background

        if (background) {
            return (
                <select value={aptitude} onChange={this.handleChange}>
                     <option disabled value="">-- Select Aptitude --</option>
                    {BACKGROUNDS[background].aptitude_choice.map(function(v) {
                        return <option key={v} value={v}>{v}</option>;
                    })}
                </select>
            );
        }
        return (<div/>);
    }
}

export class ChooseBackground extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    this.handleAptitudeChange = this.handleAptitudeChange.bind(this);
    this.state = {
        chosen_background: null,
        chosen_aptitude: "",
    }
    this.notify_parent = this.props.onChange;
  }

  handleBackgroundChange(e)
  {
      this.setState({argh:true})
      const background = e.target.value;
      const new_state = {
          chosen_background: background,
          chosen_aptitude: ""
      };
      this.setState(new_state);
      this.notify_parent(new_state);
  }

  handleAptitudeChange(e)
  {
      this.setState({fuck_aptitude:"shite"});
      const aptitude = e.target.value;
      const ret = {
          chosen_background: this.state.chosen_background,
          chosen_aptitude: aptitude
      };

      this.setState({chosen_aptitude:aptitude});
      this.notify_parent(ret);
  }

  render() {
    const background = this.props.background;

    return (
      <fieldset>
        <legend>Choose Background</legend>
        <select value={background} onChange={this.handleBackgroundChange}>
          <option disabled value="">-- Select Background --</option>

            {mapObject(BACKGROUNDS, function(k,v) {
                return <option key={k} value={k}>{v.display_text}</option>;
           })}
        </select>
        <ChooseBackgroundAptitude
            aptitude={this.state.chosen_aptitude}
            background={this.props.background}
            onChange={this.handleAptitudeChange}
            />
            <PrintObject payload={this.state}/>
      </fieldset>
    );
  }
}
