import React from 'react';
import {SimpleListChooser} from './standard_components';
import {mapObject} from './utils';

export const BACKGROUNDS = [
  "OUTCAST",
  "IMPERIAL_GUARD"
];

export const BACKGROUND_DETAILS = {
    OUTCAST: {
        display_text: "Outcast",
        aptitudes: ["FIELDCRAFT", "SOCIAL"]
    },
    IMPERIAL_GUARD: {
        display_text: "Imperial Guard",
        aptitudes: ["FIELDCRAFT", "LEADERSHIP"]
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
                    {BACKGROUND_DETAILS[background].aptitudes.map(function(v) {
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

  handleBackgroundChange(i, v)
  {
      const new_state = {
          background: v,
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

          <SimpleListChooser
            selected={background}
            index={0}
            choices={BACKGROUNDS}
            onChange={this.handleBackgroundChange}
            defaultLabel={"--- Choose a Background ---"}
            />

        <ChooseBackgroundAptitude
          aptitude={aptitude}
          background={background}
          onChange={this.handleAptitudeChange}/>
      </fieldset>
    );
  }
}
