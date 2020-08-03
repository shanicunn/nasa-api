import React from 'react';
import '../App.css';

class ViewAPOD extends React.Component {
  render() {
     return (
      //  Displays APOD in OldAPODS component
        <div className="viewAPods">
          <div className="view-date">
            <h1>{this.props.date}</h1>
        </div>
        <div className="view-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="view-photo">
            <img src={this.props.url} alt=""></img>
        </div>
        <div className="view-explanation">
            <p>{this.props.explanation}</p>
        </div>   
        </div>
    )
  }
  }

export default ViewAPOD;