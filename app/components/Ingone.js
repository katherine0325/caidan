import React from 'react';
import {Link} from 'react-router';

import PageoneStore from '../stores/PageoneStore'
import PageoneActions from '../actions/PageoneActions';

var styles = {
	fix:{
		padding:20,
	    background:'#e8e8e8'
	},
	hfour:{
		fontFamily:'Microsoft YaHei'
	}
}

class Ingone extends React.Component
{
	constructor(props) {
		super(props);
		this.state = PageoneStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PageoneStore.listen(this.onChange);
	}

	componentWillUnmount() {
		PageoneStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let menunamesbar = this.state.menunames.map((menuname) => {
			return (
				<button className='btn btn-default' data-id={menuname.id}>{menuname.name}</button>
			);
		});

		return (
			<div className='row navbar-fixed-bottom' style={styles.fix}>
				<div className='col-sm-2'>
					<h4 style={styles.hfour}>正在做的菜色：</h4>
				</div>
				<div className='col-sm-10'>
					{menunamesbar}
				</div>
			</div>
		);
	}
}

export default Ingone;