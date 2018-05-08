import React from "react";

// Using React.component

/*
class Weather extends React.Component {
    render() {
        return(
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
                {this.props.description && <p>Description: {this.props.description}</p> }
                {this.props.error && <p> {this.props.error}</p> }
            </div>
        )
    }
}
*/


// Using stateless function
const Weather = (props) => (
    <div>
        {props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
        {props.temperature && <p>Temperature: {props.temperature}</p> }
        {props.humidity && <p>Humidity: {props.humidity}</p> }
        {props.description && <p>Description: {props.description}</p> }
        {props.error && <p> {props.error}</p> }
    </div>
    )


export default Weather;