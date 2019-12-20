import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "../items/button/button";
import Input from "../items/input/input";

import "./config.scss";

class ConfigComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      age: "",
      height: "",
      weight: "",
      levelActive: "",
      desiredResult: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "age":
        this.setState({ age: value });
        break;
      case "height":
        this.setState({ height: value });
        break;
      case "weight":
        this.setState({ weight: value });
        break;
      case "gender":
        this.setState({ gender: value });
        break;
      case "levelActive":
        this.setState({ levelActive: value });
        break;
      case "desiredResult":
        this.setState({ desiredResult: value });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    axios.get("http://localhost:8080/config").then(response => {
      const config = response.data.data;
      this.setState({
        gender: config.gender,
        age: config.age,
        height: config.height,
        weight: config.weight,
        levelActive: config.levelActive,
        desiredResult: config.desiredResult
      });
    });
  }

  handleSubmit = e => {
    let checkoutProp = false;

    if (Number(this.state.age) > 100 || Number(this.state.age) < 0)
      checkoutProp = true;
    if (Number(this.state.height) > 250 || Number(this.state.height) < 0)
      checkoutProp = true;
    if (Number(this.state.weight) > 150 || Number(this.state.weight) < 0)
      checkoutProp = true;

    if (checkoutProp == false) {
      axios.patch("http://localhost:8080/config", this.state);
    } else {
      console.log("неправильно введены данные");
    }

    e.preventDefault();
  };

  render() {
    return (
      <div className="config">
        <div className="config_form">
          <form onSubmit={this.handleSubmit} className="form">
            <div className="config_input">
              <Input
                type="radio"
                name="gender"
                value="w"
                label="women"
                onChange={this.handleChange}
              />
              <Input
                type="radio"
                name="gender"
                value="m"
                label="men"
                onChange={this.handleChange}
              />
            </div>
            <div className="config_input">
              <Input
                type="text"
                name="age"
                label="age"
                onChange={this.handleChange}
                value={this.state.age}
                className="input"
              />
              <Input
                type="text"
                name="height"
                label="height"
                onChange={this.handleChange}
                value={this.state.height}
                className="input"
              />
              <Input
                type="text"
                name="weight"
                label="weight"
                onChange={this.handleChange}
                value={this.state.weight}
                className="input"
              />
            </div>
            <div className="config_input">
              <Input
                type="radio"
                name="levelActive"
                value="0"
                label="zero active"
                onChange={this.handleChange}
              />
              <Input
                type="radio"
                name="levelActive"
                value="1"
                label="3 times a week"
                onChange={this.handleChange}
              />
              <Input
                type="radio"
                name="levelActive"
                value="2"
                label="every day"
                onChange={this.handleChange}
              />
            </div>
            <div className="config_input">
              <Input
                type="radio"
                name="desiredResult"
                value="0"
                label="slim"
                onChange={this.handleChange}
              />
              <Input
                type="radio"
                name="desiredResult"
                value="1"
                label="stay at this weight"
                onChange={this.handleChange}
              />
              <Input
                type="radio"
                name="desiredResult"
                value="2"
                label="to gain weight"
                onChange={this.handleChange}
              />
            </div>
            <div className="config_input">
              <Button type="submit" label="change" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ConfigComponent;
