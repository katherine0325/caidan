import React from 'react';
import {Link} from 'react-router';

import PagetwoStore from '../stores/PagetwoStore'
import PagetwoActions from '../actions/PagetwoActions';

var styles = {
	row:{
		padding:20,
	},
	hfour:{
		fontFamily:'Microsoft YaHei',
		lineHeight:2,
	},
}

class Finish extends React.Component
{
	constructor(props) {
		super(props);
		this.state = PagetwoStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PagetwoStore.listen(this.onChange);
		document.body.style.background = '#e8e8e8';
	}

	componentWillUnmount() {
		PagetwoStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let finishnamesbar = this.state.finishnames.map((finishname) => {
			return (
				<button className='btn btn-default'>{finishname}</button>
			);
		});

		return (
			<div className='row' style={styles.row}>
				<div className='col-sm-1'>
					<h4 style={styles.hfour}>已完成：<br/><font style={{color:'red'}}>{this.state.allmenuname}</font>个饭</h4>
				</div>
				<div className='col-sm-11'>
					{finishnamesbar}
				</div>
			</div>
		);
	}
}

export default Finish;