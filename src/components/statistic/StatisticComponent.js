import React from "react";
import axios from "axios";

import "./statistic.scss";

class StatisticComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      age: "",
      height: "",
      weight: "",
      levelActive: "",
      desiredResult: "",
      products: []
    };
  }

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
    axios.get("http://localhost:8080/addproducts").then(response => {
      const listProducts = response.data.data;
      this.setState({ products: listProducts });
    });
  }

  getNormalCalories() {
    let calories = 0;

    if (this.state.gender === "w") {
      calories =
        447.6 +
        9.2 * this.state.weight +
        3.1 * this.state.height -
        4.3 * this.state.age;
    } else if (this.state.gender === "m") {
      calories =
        88.36 +
        13.4 * this.state.weight +
        4.8 * this.state.height -
        5.7 * this.state.age;
    }

    switch (this.state.levelActive) {
      case "0":
        calories = calories;
        break;
      case "1":
        calories = calories * 1.2;
        break;
      case "2":
        calories = calories * 1.55;
        break;
      default:
        break;
    }

    switch (this.state.desiredResult) {
      case "0":
        calories *= 0.8;
        break;
      case "1":
        calories *= 1;
        break;
      case "2":
        calories *= 1.2;
        break;
      default:
        break;
    }

    return calories;
  }

  getEatedColoriesNow() {
    let dataColories = {};
    let calories = 0;
    let proteins = 0;
    let fats = 0;
    let carbohydrates = 0;
    let products = this.state.products;

    for (let i = 0; i < products.length; i++) {
      calories += products[i].calories;
      proteins += products[i].proteins;
      fats += products[i].fats;
      carbohydrates += products[i].carbohydrates;
    }

    dataColories.calories = calories;
    dataColories.proteins = proteins;
    dataColories.fats = fats;
    dataColories.carbohydrates = carbohydrates;

    return dataColories;
  }

  render() {
    let dataCalories = this.getEatedColoriesNow();
    let normalCalories = Number(this.getNormalCalories()).toFixed(1);
    let normalProteins = ((normalCalories * 0.3) / 4).toFixed(1);
    let normalFats = ((normalCalories * 0.2) / 9).toFixed(1);
    let normalCarbohydrates = ((normalCalories * 0.5) / 4).toFixed(1);

    let procCaloriesAll = (
      dataCalories.calories /
      (normalCalories / 100)
    ).toFixed(0);
    let procProteins = (dataCalories.proteins / (normalProteins / 100)).toFixed(
      0
    );
    let procFats = (dataCalories.fats / (normalFats / 100)).toFixed(0);
    let procCarbohydrates = (
      dataCalories.carbohydrates /
      (normalCarbohydrates / 100)
    ).toFixed(0);

    let text = "EAT MORE";
    if (procCaloriesAll > 100) text = "ENOUGH TO EAT";

    if (procCaloriesAll > 100) procCaloriesAll = 100;
    if (procProteins > 100) procProteins = 100;
    if (procFats > 100) procFats = 100;
    if (procCarbohydrates > 100) procCarbohydrates = 100;

    return (
      <div className="out_statistic">
        <p className="text">{text}</p>
        <div className="statistic">
          <div className="progress">
            <progress max="100" value={procCaloriesAll}></progress>
            <div className="progress-value"></div>
            <div className="progress-bg">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
        <p className="text text__small text__first">
          calories {dataCalories.calories.toFixed(1)}/{normalCalories}
        </p>
        <div className="statistic_footer">
          <div className="statistic_other">
            <div className="progress progress_other">
              <progress max="100" value={procProteins}></progress>
              <div className="progress-value"></div>
              <div className="progress-bg">
                <div className="progress-bar"></div>
              </div>
            </div>
            <p className="text text__small">
              proteins: {dataCalories.proteins.toFixed(1)}/{normalProteins}
            </p>
          </div>
          <div className="statistic_other">
            <div className="progress progress_other">
              <progress max="100" value={procFats}></progress>
              <div className="progress-value"></div>
              <div className="progress-bg">
                <div className="progress-bar"></div>
              </div>
            </div>
            <p className="text text__small">
              fats: {dataCalories.fats.toFixed(1)}/{normalFats}
            </p>
          </div>
          <div className="statistic_other">
            <div className="progress progress_other">
              <progress max="100" value={procCarbohydrates}></progress>
              <div className="progress-value"></div>
              <div className="progress-bg">
                <div className="progress-bar"></div>
              </div>
            </div>
            <p className="text text__small">
              carbohydrates: {dataCalories.carbohydrates.toFixed(1)}/
              {normalCarbohydrates}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StatisticComponent;
