import React from "react";

import like from "../../img/heart.png";
import share from "../../img/share.png";

export default function() {
  return (
    <section className="video-editor">

      <aside>
        <div>
          <img src={like}  alt="like"/>
          <span>LIKE</span>
        </div>
        <div>
          <img src={share} alt="share"/>
          <span>SHARE</span>
        </div>
      </aside>

      <aside>
        <button>EDIT</button>
        <button className="btn-delete">DELETE</button>
      </aside>

    </section>
  )
}