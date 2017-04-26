import React, {Component} from "react";

import VideoEditor from "./video-editor";

class VideoContainer extends Component {

  sendMessage(e) {
    e.preventDefault();
    const date = Date();
    const valueInput = this.inpVal;

    const inputObject = {
      name: 'My new Name',
      message: valueInput.value,
      date: date,
      replays: []
    };

    this.props.comentList(inputObject);

    this.inpVal.value = "";
  }

  render() {
    return (
      <main className="video">
        <section className="video-player">
          <iframe width="100%" height="100%" src={this.props.videoUrl} frameBorder="0" allowFullScreen></iframe>
        </section>
        <VideoEditor />
        <form
          className="video-comment"
          onSubmit={ this.sendMessage.bind(this) }
        >
          <input
            type="text"
            className="initial-input"
            placeholder="comment..."
            ref={ inp => this.inpVal = inp }
          />
        </form>
      </main>
    )
  }
}

export default VideoContainer;

//<iframe src={this.props.videoUrl} width="100%" height="100%" frameborder="0" allowfullscreen>
//</iframe>