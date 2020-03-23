import React, { Component } from 'react';



class Comp2 extends Component {

	state = {
		info: ''
	}

	getInfo = () => {
		return fetch('https://jwt-subdomain.herokuapp.com/api/message')
		.then(res => res.json())
		.then(data => this.setState({
			info: JSON.stringify(data)
		}))
	}

	componentDidMount(){
		this.getInfo()
	}

	render() {
		return (
			<div>
				{this.state.info}
				{this.state.info}
				{this.state.info}
			</div>
		);
	}
}

export default Comp2;
