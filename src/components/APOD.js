import React from 'react';
import axios from 'axios';

// Base url with api key
const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=M0Q1d8CExIBLjGoFC0Stdn2ZC0OtYK7Dlo2KFqBd";

class APOD extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
        };
    }
    // Asynchronous method to retireve APOD api
    async getAPOD() {
        try {
            const res = await axios.get(BASE_URL);
            console.log(res);
            this.setState(
                { info: res.data }
            )
        } catch {

        }
    }
    // Check APOD is running
    componentDidMount() {
        // console.log("APOD did mount");
        this.getAPOD();
    }
    render() {
        return (
            // Displays date, title, photo, image and button to see old APODs
            <div className="child apod">
                <div className="date">
                    <h1>{this.state.info.date}</h1>
                </div>
                <div className="title">
                    <h1>{this.state.info.title}</h1>
                </div>
                <div className="photo">
                    <img src={this.state.info.url} alt=""></img>
                </div>
                <div className="explanation">
                    <p>{this.state.info.explanation}</p>
                </div>
                <div className="oldApods">
                    <button>Check Out Past Dates</button>
                </div>
            </div>
        )
    }
}
export default APOD;