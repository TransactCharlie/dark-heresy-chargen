import React from 'react';
import {mapObject} from './utils';

const BACKGROUNDS = {
    OUTCAST: {
        display_text: "Outcast",
        aptitude_choice: ["FIELDCRAFT", "SOCIAL"]
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
      this.props.onChange(e.target.value);
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
    this.state = props.backgroundChoice;
  }

  handleBackgroundChange(e)
  {
      const new_state = {
          background: e.target.value,
          aptitude: ""
      };
      this.setState(new_state);
      this.props.onChange(new_state);
  }

  handleAptitudeChange(new_aptitude)
  {
      const new_state = {
          background: this.state.background,
          aptitude: new_aptitude
      };

      this.setState(new_state);
      this.props.onChange(new_state);
  }

  render() {
    const bc = this.props.backgroundChoice;
    const background = bc.background;
    const aptitude = bc.aptitude;

    return (
      <fieldset>
        <legend>Choose Background</legend>

        <select
          value={background}
          onChange={this.handleBackgroundChange}>

          <option disabled value="">-- Select Background --</option>
          {mapObject(BACKGROUNDS, function(k,v) {
            return <option key={k} value={k}>{v.display_text}</option>;
          })}
        </select>

        <ChooseBackgroundAptitude
          aptitude={aptitude}
          background={background}
          onChange={this.handleAptitudeChange}/>
      </fieldset>
    );
  }
}
