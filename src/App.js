import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Forms"
import Weather from "./components/Weather";


// API key from OpenWeatherMap
const API_KEY = "06bd02b8ef6dd56ee266e44e7ed60d59";


class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    // A method to call the API
    getWeather = async (e) => {
        e.preventDefault();

        // to get the city and country from the form
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;


        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        //condition to see if a value is enter in the form.
        if(city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            })
        }
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter a valid city and country"
            })
        }
    }

    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;