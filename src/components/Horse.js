import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Horse extends Component {
    constructor() {
        super();
        this.changeHorse = this.changeHorse.bind(this);
    }

    changeHorse(e) {
        const buttonId = e.target.id;
        const horseId = buttonId.split('_')[0];
        this.props.horseToSelect(horseId);
     }


    render() {

    return(
            <div className="Horse" >
            <div className="container">
                <div className="row">
                    {
                        this.props.horses.map((horse) =>
                            <div className="col-xs-6 col-md-3">
                                <div className="horse-box">
                                    <img src={horse.img} class="img-responsive" />
                                    <div className="horse-info">
                                        <div className="pull-right">
                                            <button 
                                            id={horse.id + '_button'} 
                                            key={horse.id} 
                                            onClick={this.changeHorse}
                                            className="btn btn-primary"
                                              > DETAILS
                                              </button>
                                        </div>
                                        <div className="horse-info-name">{horse.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            </div>
        );
}
}

Horse.propTypes = {
    horseToSelect: PropTypes.func.isRequired,
    activeHorse: PropTypes.string.isRequired,
    horses: PropTypes.array.isRequired,
    
};

export default Horse;