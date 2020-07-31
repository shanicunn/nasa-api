import React from 'react';
import axios from 'axios';

const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=M0Q1d8CExIBLjGoFC0Stdn2ZC0OtYK7Dlo2KFqBd";

class OldAPODS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            date: "",
        };
    }
    onDateChange = (e) => {
        this.setState({
          date: e.target.value,
        })
      }
    async getOldAPODS() {
        try {
            const res = await axios.get(BASE_URL + this.state.date);
            console.log(res);
            this.setState(
                { info: res.data }
            )
        } catch {

        }
    }
    componentDidMount() {
        this.getOldAPODS();
    }
    render() {
        return (

            <div className="child pastApods">
                <form className="form">
                    <label>What date would you like to see (YYYY-MM-DD):</label> 
                    <br></br>
                    <input type="text" placeholder="YYYY-MM-DD" 
                        value={this.state.date} onChange={this.onDateChange}
                    />
                </form>
                
                {/* <div className="date">
                    <h1>{this.state.info.date}</h1>
                </div>
                <div className="photo">
                    <img src={this.state.info.url} alt=""></img>
                </div>
                <div className="explanation">
                    <p>{this.state.info.explanation}</p>
                </div> */}
                <div className="oldApods">
                    <button type="submit">Check Out A Different Date</button>
                </div>
            </div>
        )
    }
}
export default OldAPODS;