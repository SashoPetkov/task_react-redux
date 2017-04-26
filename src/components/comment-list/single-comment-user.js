import React from "react";

export default function ({commentData}) {

  const userPic = 'http://delicious-skin.com/_assets/_images/people/people-300/Russian%20teen%20face%20300px.jpg';
  return (
    <section className="user">
      <img src={userPic} alt="user_image"/>
      <div>
        <h2>{commentData.name}</h2>
        <p>{commentData.date}</p>
      </div>
    </section>
  )
};