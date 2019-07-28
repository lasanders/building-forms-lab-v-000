// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandsContainer from '../containers/BandsContainer'
import Bands from './Bands'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <label>add band</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(null, mapDispatchToProps)(BandInput);
