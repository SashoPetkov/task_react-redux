import React from "react";

import like from "../../img/heart.png";
import share from "../../img/share.png";
import comment from "../../img/comm.png";
import flag from "../../img/flag.png";

class SingleCommentBar extends React.Component {

  activeReplayAdd() {
    let activate_replay = !this.props.replayState;
    this.props.replayShow(activate_replay);
  }

  render(){
    return (
      <section className="comment-like-bar">
        <aside>
          <div>
            <img src={like}  alt="like"/>
            <span>LIKE</span>
          </div>
          <div>
            <img src={share} alt="share"/>
            <span>SHARE</span>
          </div>
          <div className="replayAddBtn" onClick={ this.activeReplayAdd.bind(this) }>
            <img src={comment} alt="comment" />
            <span>COMMENT</span>
          </div>
        </aside>

        <aside className="like-comment">
          <img src={flag} alt="comment"/>
          <span>REPORT</span>
        </aside>
      </section>
    )
  }
}

export default SingleCommentBar;