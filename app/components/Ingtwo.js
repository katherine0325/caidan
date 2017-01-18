import React from 'react';
import {Link} from 'react-router';

import PagetwoStore from '../stores/PagetwoStore'
import PagetwoActions from '../actions/PagetwoActions';

var styles = {
	row:{
		marginTop:-20,
		padding:20,
		borderBottom:'1px solid #ddd',
		background:'#fff',
		minHeight:300,
	},
	hfour:{
		fontFamily:'Microsoft YaHei',
	},
	button:{
		marginBottom:20,
		marginRight:10,
	}
}

var finishnames = [];

class Ingtwo extends React.Component
{
	constructor(props) {
		super(props);
		this.state = PagetwoStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PagetwoStore.listen(this.onChange);

		let socket = io.connect();
		socket.on('menunames', (data) => {
		  PagetwoActions.ingMenunamesSub(data.menunames);
		});	
	}

	componentWillUnmount() {
		PagetwoStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	namebuttonClick(e) {
		var menunames = this.state.menunames;
		var name = e.target.innerHTML;
		var id = e.target.getAttribute("data-id");

		var finishname = e.target.innerHTML;
		finishnames.push(finishname);
		PagetwoActions.finishMenuname(finishnames);

		var button = document.getElementsByTagName("button");
		for (var i=0;i<button.length ;i++ )
		{
			button[i].value = i-1;
		}

		var menunameindex = e.target.value;
		menunames.splice(menunameindex,1);
		PagetwoActions.ingMenunamesSub(menunames);

		let socket = io.connect();
		socket.emit('menunames', menunames);
	}

	render() {
		let menunamesbar = this.state.menunames.map((menuname) => {
			return (
				<button className='btn btn-danger flipInX animated' style={styles.button} onClick={this.namebuttonClick.bind(this)} data-id={menuname.id}>{menuname.name}</button>
			);
		});

		return (
			<div className='row' style={styles.row}>
				<div className='col-sm-1'>
					<h4 style={styles.hfour}>进行中:</h4>
				</div>
				<div className='col-sm-11'>
					{menunamesbar}
				</div>
			</div>
		);
	}
}

export default Ingtwo;