import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/horse-details.css';

class HorseDetails extends Component {
  render() {
    return (
      <div className="HorseDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4">
                <img src={this.props.img} alt={this.props.name} />
              </div>
              <div className="col-md-8 horse-details">
                <h2>{this.props.name}</h2>
                <ul class="list">
                  <li><span className="bold">Breed:</span> {this.props.breed}</li>
                  <li><span className="bold">Height:</span> {this.props.height}</li>
                  <li><span className="bold">Color:</span> {this.props.color}</li>
                  <li><span className="bold">Hay Needed:</span> {this.props.food}</li>
                  <li><span className="bold">Favorite Treat:</span> {this.props.treat}</li>
                </ul>
                <a className="btn btn-success">EDIT</a>
                <a className="btn btn-danger" type="button">DELETE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HorseDetails.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  food: PropTypes.string.isRequired,
  treat: PropTypes.string.isRequired,
};


export default HorseDetails;