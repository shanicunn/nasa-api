import React from 'react';
import '../App.css';

class ViewAPOD extends React.Component {
  render() {
     return (
        <div className="viewAPods">
          <div className="date">
            <h1>{this.props.date}</h1>
        </div>
        <div classname="title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="photo">
            <img src={this.props.url} alt=""></img>
        </div>
        <div className="explanation">
            <p>{this.props.explanation}</p>
        </div>   
        </div>
    )
  }
  }

export default ViewAPOD;