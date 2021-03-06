import React from 'react';
import axios from 'axios';
import ViewAPOD from './ViewAPOD';


const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=M0Q1d8CExIBLjGoFC0Stdn2ZC0OtYK7Dlo2KFqBd";


class OldAPODS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            userDate: "",
            formCompleted: false,
        };
        // Angel's edit
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }
    // Updates userDate when user inputs date
    onDateChange = (e) => {
        this.setState({
          userDate: e.target.value,
        })

      }
    // Updates form submission on submit
    handleFormSubmission = (e) => {
        e.preventDefault()
        // Angel's edit
        // console.log(`${BASE_URL}&date=${this.state.userDate}`)
        this.setState({
          formCompleted: true,
        })
        // Angel's edit
        this.getOldAPODS();
      }
    
    async getOldAPODS() {
        try {
            const res = await axios.get(`${BASE_URL}&date=${this.state.userDate}`);
            // console.log(res);
            // console.log(`${BASE_URL}&date=${this.state.userDate}`)
            this.setState(
                { info: res.data }
            )
        } catch {

        }
    }
    // Commented out because it actually needs to wait for user input
    // componentDidMount() {
    //     this.getOldAPODS();
    // }

    render() {
        return (

            <div className="child pastApods border">
            {/* Form includes user input for userDate */}
               <div className="form">
                   <form className="form" onSubmit={this.handleFormSubmission}> 
                    <label>What date would you like to see?</label> 
                    <input type="text" placeholder="YYYY-MM-DD" 
                        value={this.state.userDate} onChange={this.onDateChange}
                    />
                    
                    <button type="submit" onClick={this.handleFormSubmission}>Check Out A Different Date</button>
                </form>
               </div>
               {/* Actual APOD being displayed here after input */}
                <div className="viewApods-pastApods">
                        <ViewAPOD 
                        date={this.state.info.date}
                        title={this.state.info.title}
                        url={this.state.info.url}
                        explanation={this.state.info.explanation}
                    />
                    </div>
                
            </div>
        )
    }
}
export default OldAPODS;