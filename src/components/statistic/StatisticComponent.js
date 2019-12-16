import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
	}

	getNormalCalories() {
		if (this.state.gender === 'w') {
			return 447.6 + 9.2 * this.state.weight + 3.1 * this.state.height - 4.3 * this.state.age;
		}
		else if (this.state.gender === 'm') {
			return 88.36 + 13.4 * this.state.weight + 4.8 * this.state.height - 5.7 * this.state.age;
		}
	}

	render() {
		let normalCalories = this.getNormalCalories();
		let normalProteins = normalCalories*0.3;
		let normalFats = normalCalories*0.2;
		let normalCarbonaries = normalCalories*0.5;
		return(
			<>
				<p>Calories normal: { normalCalories }</p>
				<p>Proteins normal: { normalProteins }</p>
				<p>Fats normal: { normalFats }</p>
				<p>Carbonaries normal: { normalCarbonaries }</p>
			</>
		);
	}
} 

export default StatisticComponent;