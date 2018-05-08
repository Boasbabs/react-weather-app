import React from "react";

// Using React.component

/*
class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        )
    }
}
*/

// Using stateless function
const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
)
export default Form;