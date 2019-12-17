import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import store from "../../store/store";

import './statistic.scss';

class StatisticComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gender: '',
			age: '',
			height: '',
			weight: '',
			levelActive: '',
			desiredResult: '',
			products: [],
		}
	}

	componentDidMount() {
		axios.get('http://localhost:8080/config').then(response => {
			const config = response.data.data;
			this.setState(
				{
					gender: config.gender,
					age: config.age,
					height: config.height,
					weight: config.weight,
					levelActive: config.levelActive,
					desiredResult: config.desiredResult,
				}
			);
		});
	  axios.get('http://localhost:8080/addproducts').then(response => {
	    const list = response.data.data;
	    this.setState({products: list});
	  })
 
	}

	getNormalCalories() {
		if (this.state.gender === 'w') {
			return 447.6 + 9.2 * this.state.weight + 3.1 * this.state.height - 4.3 * this.state.age;
		}
		else if (this.state.gender === 'm') {
			return 88.36 + 13.4 * this.state.weight + 4.8 * this.state.height - 5.7 * this.state.age;
		}
	}

	geteatedColoriesNow() {
		let dataColories = {};
		let calories = 0;
		let proteins = 0;
		let fats = 0;
		let carbohydrates = 0;
		let products = this.state.products;
		for ( let i = 0; i < products.length; i++) {
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
		console.log(this.state.products);
		let dataCalories = this.geteatedColoriesNow();
		let normalCalories = (Number(this.getNormalCalories())).toFixed(1);
		let normalProteins = (normalCalories*0.3 / 4).toFixed(1);
		let normalFats = (normalCalories*0.2 / 9).toFixed(1);
		let normalCarbohydrates = (normalCalories*0.5 / 4).toFixed(1);

		let procCaloriesAll = (dataCalories.calories / (normalCalories / 100)).toFixed(0);
		let procProteins = (dataCalories.proteins / (normalProteins / 100)).toFixed(0);
		let procFats = (dataCalories.fats / (normalFats / 100)).toFixed(0);
		let procCarbohydrates = (dataCalories.carbohydrates / (normalCarbohydrates / 100)).toFixed(0);
		
		let text = 'EAT MORE';
		if (procCaloriesAll > 100) text = 'ENOUGH TO EAT';
		if (procCaloriesAll > 100) procCaloriesAll = 100;
		if (procProteins > 100) procProteins = 100;
		if (procFats > 100) procFats = 100;
		if (procCarbohydrates> 100) procCarbohydrates = 100;

		return(
			<div className="out_statistic">
				<p className="text">{text}</p>
				<p className="text text__small text__first">Calories  {dataCalories.calories.toFixed(1)}/{ normalCalories }</p>
				<div className="statistic">
					<div className="progress">
					    <progress max="100" value={procCaloriesAll}></progress>
					    <div className="progress-value"></div>
					    <div className="progress-bg"><div className="progress-bar"></div></div>
					</div>
				</div>
					<div className="statistic_other">
						<p className="text text__small">Proteins: {dataCalories.proteins.toFixed(1)}/{ normalProteins }</p>
						<div className="progress progress_other">
						    <progress max="100" value={procProteins}></progress>
						    <div className="progress-value"></div>
						    <div className="progress-bg"><div className="progress-bar"></div></div>
						</div>
					</div>
					<div className="statistic_other">
						<p className="text text__small">Fats: {dataCalories.fats.toFixed(1)}/{ normalFats }</p>
						<div className="progress progress_other">
						    <progress max="100" value={procFats}></progress>
						    <div className="progress-value"></div>
						    <div className="progress-bg"><div className="progress-bar"></div></div>
						</div>
					</div>
					<div className="statistic_other">
						<p className="text text__small">Carbohydrates: {dataCalories.carbohydrates.toFixed(1)}/{ normalCarbohydrates }</p>
						<div className="progress progress_other">
						    <progress max="100" value={procCarbohydrates}></progress>
						    <div className="progress-value"></div>
						    <div className="progress-bg"><div className="progress-bar"></div></div>
						</div>
					</div>
			</div>
		);
	}
} 

export default StatisticComponent;