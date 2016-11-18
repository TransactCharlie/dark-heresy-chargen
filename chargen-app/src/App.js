import React from 'react';
import './App.css';

const homeworlds = {
  FERAL: {
    characteristic_bonuses: ["STRENGTH", "TOUGHNESS"],
    characteristic_weaknesses: ["INFLUENCE"],
    aptitudes: ["TOUGHNESS"]
  },
  HIVE: {
    characteristic_bonuses: ["PERCEPTION", "INTELLIGENCE"],
    characteristic_weaknesses: ["TOUGHNESS"],
    aptitudes: ["PERCEPTION"]
  },
};

function CharacterJsonBox(props) {
  const json_char = JSON.stringify(props.character);
  return <p> {json_char} </p>;
}

class HomeworldChoice extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const homeworld = this.props.homeworld;

    return (
      <fieldset>
        <legend> Choose Homeworld</legend>
        <select value={homeworld} onChange={this.handleChange}>
          <option disabled selected value="">-- Select Homeworld --</option>
          <option value="FERAL">Feral World</option>
          <option value="HIVE">Hive World</option>
        </select>
      </fieldset>
    );
  }
}

class BackgroundChoice extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const background = this.props.background;

    return (
      <fieldset>
        <legend>Choose Background</legend>
        <select value={background} onChange={this.handleChange}>
          <option disabled selected value="">-- Select Background --</option>
          <option value="OUTCAST">Outcast</option>
          <option value="GUARDSMAN">Imperial Guard</option>
        </select>
      </fieldset>
    );
  }
}

class App extends React.Component {

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
        <HomeworldChoice homeworld={homeworld} onChange={this.handleHomeworldChange}/>
        <BackgroundChoice background={background} onChange={this.handleBackgroundChange}/>
        <CharacterJsonBox character={character} />
      </div>
    );
  }
}

export default App;
