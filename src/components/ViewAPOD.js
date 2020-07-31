import React from 'react';

const ViewAPOD = (props) => {
    return (
        <div>
          <div className="date">
                <h1>{props.state.info.date}</h1>
        </div>
        <div className="photo">
                    <img src={props.state.info.url} alt=""></img>
        </div>
        <div className="explanation">
                    <p>{props.state.info.explanation}</p>
        </div>   
        </div>
    )
  }

export default ViewAPOD;