import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const SingleCard = (props) => {
  const { title,percentage , icon } = props.item;
  return (
    <div className="row single__card">
      <span className="card__icon">
        <i class={icon}></i>
      </span>
      <div className="card__content">
        <h4>{title}</h4>

      </div>
      <div className="progress ">
      <CircularProgressbar value={percentage} text={`${percentage}%`}/>

      </div>

    </div>
  );
};

export default SingleCard;