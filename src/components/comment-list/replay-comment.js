import React from "react";

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { addReplay } from "../../actions/root_actions";

class ReplayComment extends React.Component {

  sendReplay (event) {
    event.preventDefault();
    const replDate = Date();
    let myReplay;

      // only to prevent empty posts
    if(this.replay.value !== "") {

      myReplay = {
        text: this.replay.value,
        date: replDate
      };

      // start ACTION -- addReplay
    this.props.addReplay(myReplay, this.props.i);

    }

    this.replay.value = "";
  }

  render() {
    return (
      <div className="replay">
        <section>
          <p>COMMENT</p>
          <p>PHOTO</p>
          <p>FEEDBACK</p>
        </section>
        <form
          onSubmit={ this.sendReplay.bind(this) }
        >
          <input
            type="text"
            placeholder="Replay..."
            ref={ replay => this.replay = replay }/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReplay }, dispatch);
}
function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplayComment);
