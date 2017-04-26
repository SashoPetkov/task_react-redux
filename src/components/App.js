import React, { Component } from 'react';

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { addComments } from "../actions/root_actions";


import VideoContainer from "./video-container/video-container";
import CommentsList from "./comment-list/comments-list";

class App extends Component {
  
  addComment(inpObject) {
    this.props.addComments(inpObject);
  }

  render() {
    // const url = `https://www.youtube.com/embed/${this.props.videoUrl.videoUrl}?&controls=0&&showinfo=0`;
    const url = `https://www.youtube.com/embed/${this.props.videoUrl.videoUrl}?&&showinfo=0`;
    return (
      <div className="pop-up">

        <VideoContainer
          comentList={this.addComment.bind(this)}
          videoUrl={url}
        />

        <CommentsList
          commentState={this.props.comments}
        />
        <span className="close">+</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComments }, dispatch);
}
function mapStateToProps(state) {
  return {
    comments: state.comments,
    videoUrl: state.videoUrl
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

