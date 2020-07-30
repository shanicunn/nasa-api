import React from 'react';
import axios from 'axios';

const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=M0Q1d8CExIBLjGoFC0Stdn2ZC0OtYK7Dlo2KFqBd";

class APOD extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
        };
    }
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
    componentDidMount() {
        this.getAPOD();
    }
    render() {
        return (
            <div className="child">
                <h1>{this.state.info.date}</h1>
                <img src={this.state.info.url} alt=""></img>
                <p>{this.state.info.explanation}</p>
            </div>
        )
    }
}
export default APOD;