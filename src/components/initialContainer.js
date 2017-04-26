import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveUrl } from '../actions/root_actions';

class InitialContainer extends Component {

  importUrl(e) {
    e.preventDefault();
    const url = this.url.value;
    let id;
    
    if( url.includes('https://youtu.be/')) {
      id = url.replace('https://youtu.be/','');
    } else if (url.includes('https://www.youtube.com/watch?v=')) {
      id = url.replace('https://www.youtube.com/watch?v=','');
    }

    this.props.history.push(`/video/${id}`);
    this.props.saveUrl(id);
  }

  render() {
    return (
      <form
        className="initial"
        onSubmit={ this.importUrl.bind(this) }
      >
        <input
          type="text"
          className="initial-input"
          placeholder="paste youtube url..."
          ref={ inp => this.url = inp }
        />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    videoUrl: state.videoUrl
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({saveUrl}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialContainer);
// export default InitialContainer;