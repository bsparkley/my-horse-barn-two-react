import React, { Component } from 'react';
import HorseDetails from './HorseDetails';
import Horse from './Horse';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewHorse = this.selectNewHorse.bind(this);
    this.state = {
      horses: [
        {
          name: 'Big Bird',
          img: 'https://i.imgur.com/LkBt28ch.jpg',
          breed: 'Grade',
          color: 'Palomino',
          height: '16.1',
          food: '25',
          treat: 'Apple',
          id: 'big bird'

        },
        {
          name: 'Spark',
          img: 'https://i.imgur.com/4pqLWdth.jpg',
          breed: 'Quarter Horse',
          color: 'Flea Bitten',
          height: '15.1',
          food: '20',
          treat: 'Grain',
          id: 'spark'
        },
        {
          name: 'Hoot',
          img: 'https://i.imgur.com/wh8gAmEh.jpg',
          breed: 'TB',
          color: 'Dapple Grey',
          height: '14.1',
          food: '20',
          treat: 'Carrot',
          id: 'hoot'
        },
      ],
      selectedHorse: null
    }
  }

  selectNewHorse(horseId) {
    if(horseId) {
      this.setState({
        ...this.state,
        selectedHorse: horseId
      });
    }
  }


  render() {

    let horseToSelect;

    if (this.state.selectedHorse) {
      const filteredHorses = this.state.horses.filter((horse) => horse.id === this.state.selectedHorse);
      if (filteredHorses.length > 0) {
        horseToSelect = filteredHorses[0];
      }
    }

    return (
      <div className="App">
        <div className="text-center">
          <header className="App-header">
            <img src="http://www.horseclipart.com/horse_clipart_images/funny_looking_cartoon_horse_0521-1006-2722-1250_SMU.jpg" className="App-logo" alt="logo" />
            <h1 className="App-title">My Horse Barn</h1>
          </header>
        </div>
        {

          horseToSelect ?

            <HorseDetails
              name={horseToSelect.name}
              img={horseToSelect.img}
              breed={horseToSelect.breed}
              color={horseToSelect.color}
              height={horseToSelect.height}
              food={horseToSelect.food}
              treat={horseToSelect.treat}
            />
            :
            null
        }
        <div>
          <Horse 
          horses={this.state.horses}
          activeHorse={this.state.selectedHorse}
          horseToSelect={this.selectNewHorse}
          />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const horseToShow = this.state.horses[0].id || null;
    this.setState({
      ...this.state,
      selectedHorse: ''
    });
  }

}

export default App;
