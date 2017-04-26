import React, {Component} from "react";

import SingleCommentBar from "./single-comment-bar";
import SingleCommentUser from "./single-comment-user";
import ReplayComment from "./replay-comment";

class SingleComment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activate_replay: false
    };
  }

  activeReplayAdd(active) {
    this.setState({ activate_replay: active });
  }


  render() {
    return (
      <div>
        <SingleCommentUser commentData={this.props.dataComment}/>
        <p>
          {this.props.dataComment.message}
        </p>
        <SingleCommentBar
          replayState={ this.state.activate_replay }
          replayShow={ this.activeReplayAdd.bind(this) }
        />

        <ul className="replayList">
          {
            this.props.dataComment.replays.map( oneReplay => {
              return (
                <li key={oneReplay.date}>
                  <h4>{oneReplay.text}</h4>
                  <span>{oneReplay.date}</span>
                </li>
              )
            })
          }
        </ul>

        {
          this.state.activate_replay ? <ReplayComment i={this.props.i} /> : ""
        }
      </div>
    )
  }
}

export default SingleComment;