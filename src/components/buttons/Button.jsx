import React from 'react'
import "./Button.css"

function Button({icon , text}) {
  return (
    <div>
      <button className="btn">
        <img className="imgBtn" src={icon} />
        <p>{text}</p>
      </button>
    </div>
  );
}

export default Button