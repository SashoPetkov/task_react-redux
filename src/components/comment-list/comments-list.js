import React, {Component} from "react";

import SingleComment from "./single-comment";

class CommentsList extends Component {

  render() {

    return (
      <ul className="all-comments">
        {
          this.props.commentState.map((oneComment, index) => {
            return (
              <li className="comment" key={index}>
                <SingleComment dataComment={ oneComment } i={index}/>
              </li>
            )
          })
        }
      </ul>

    )
  }
}

export default CommentsList;