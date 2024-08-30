import React from "react";
import "./Card.css";
import more from "../../Assets/more-information.png";
import Button from "../buttons/Button";
// import post from "../../Assets/images.jpeg";
import like from "../../Assets/like.png";
import share from "../../Assets/share.png";
import comment from "../../Assets/comment.png";

function Card({ logo, title , post , discription}) {
  return (
    <div>
      <div className="mainDiv">
        <div className="header">
          <div className="topRight">
            <img className="profile_img" src={logo} />
            <div>
              <p className="userName">{title}</p>
              <p className="date">Monday at 11:00 AM</p>
            </div>
          </div>
          <div className="topLeft">
            <img src={more} className="more" alt="" />
          </div>
        </div>

        <div className="hero">
          <p>{discription}</p>
          <img src={post} alt="" />
        </div>
        <div className="emoji">
          <div>
            😮❤👍 you and 99+ others
          </div>
          <div>
            99+ comments
          </div>
        </div>
        <hr />

        <div className="bottom">
          <Button icon={like} text="Like" />
          <Button icon={comment} text="Comment" />
          <Button icon={share} text="Share" />
        </div>
      </div>
    </div>
  );
}

export default Card;
