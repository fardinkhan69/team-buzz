import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'

// all the player card component
const Player = (props) => {
    const style ={
        width: "18rem",
        
    }
    const handleAddButton = props.handleAddButton;

    const {name,salary,img}  = props.detail;
    return (
    
        <div className="card" style={style}>
        <img src={img} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Name:{name}</h5>
          <p className="card-text">
              <h6>Salary :{salary} </h6>
          </p>
          <button onClick={() =>handleAddButton(props.detail)} className="btn btn-primary"><FontAwesomeIcon icon={faPlus} />Add To Team</button>
        </div>
      </div>
      
      )

};

export default Player;