import React, { Component } from 'react';

class Form extends Component {
    state = {
        animal : "",
        spell:"",
        house: "",
        year:""

    }

    magicHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <p>Animal</p>
                <input type="text" name="animal" onChange={this.magicHandler}/>
                <p>Spell</p>
                <input type="text" name="spell" onChange={this.magicHandler}/>
                <p>House</p>
                <input type="text" name="house" onChange={this.magicHandler}/>
                <p>Year</p>
                <input type="text" name="year" onChange={this.magicHandler}/>
                <p>Animal: {this.state.animal}</p>
                <p>Spell: {this.state.spell}</p>
                <p>House: {this.state.house}</p>
                <p>Year: {this.state.year}</p>
            </div>
        );
    }
}

export default Form;