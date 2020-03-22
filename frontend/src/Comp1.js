import React, { Component } from 'react';



class Comp1 extends Component {

	state = {
		info: ''
	}

	getInfo = () => {
		console.log('')
		return fetch('http://localhost:3000/api/message')
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
			</div>
		);
	}
}

export default Comp1;
