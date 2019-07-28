import React, { Component } from 'react';
import { connect } from 'react-redux'
import Band from '../components/Band'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band} />)

render() {
  return(
    <div>
      {this.renderBands()}
    </div>
  );
}
};

const mapStateToProps = state => {
return {
  bands: state.bands
}
}

<<<<<<< HEAD
export default connect(mapStateToProps)(BandsContainer);
=======
export default connect(mapStateToProps)(BandContainer);
>>>>>>> 5c439d991c8c4adab78c7685098d44f5a1a6e5eb
