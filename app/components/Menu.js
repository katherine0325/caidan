import React from 'react';
import {Link} from 'react-router';

import PageoneStore from '../stores/PageoneStore'
import PageoneActions from '../actions/PageoneActions';

var styles = {
	row:{
		textAlign:'center',
		borderBottom:'1px solid #ddd',
	},
	col:{
		marginBottom:20,
	}
}

var menunames = [];

class Menu extends React.Component
{
	constructor(props) {
		super(props);
		this.state = PageoneStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PageoneStore.listen(this.onChange);

		PageoneActions.getMenu();

		let socket = io.connect();
		socket.on('menunames', (data) => {
			PageoneActions.ingMenunames(data.menunames);
			menunames = data.menunames;
		});
	}

	componentWillUnmount() {
		PageoneStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	turning(e) {
		var className = e.target.getAttribute('class')
		if (className == 'btn btn-info animated ')
		{
			var name = e.target.innerHTML;
			var id = e.target.getAttribute("data-id");
			var menuname = {};
			menuname.id = id;
			menuname.name = name;
			menunames.push(menuname);
			PageoneActions.ingMenunames(menunames);

			let socket = io.connect();
			socket.emit('menunames', menunames);
		}else{
			var id = e.target.getAttribute("data-id");
			PageoneActions.deleteMenuname(id);
		}
	}

	render() {
		let menubar = this.state.menu.map((menu) => {
			return (
				<div className='col-xs-6 col-sm-3 col-md-2 flipInX animated' style={styles.col}>
				<button className={'btn btn-info animated '+this.state.del} onClick={this.turning} data-id={menu._id}>{menu.name}</button>
				</div>
			);
		});

		return (
			<div className='row' style={styles.row}>
					{menubar}
			</div>
		);
	}
}

export default Menu;