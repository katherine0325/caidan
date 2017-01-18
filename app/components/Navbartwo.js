import React from 'react';
import {Link} from 'react-router';

var styles = {
	nav:{
		borderRadius:0,
	},
	title:{
		fontFamily:'Microsoft YaHei',
	}
}

class Navbartwo extends React.Component
{
	render() {
		return (
			<nav className="navbar navbar-inverse" role="navigation" style={styles.nav}>
			  <div className="container-fluid">
				<div className="navbar-header">
				  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
				  <a className="navbar-brand" href="#" style={styles.title}>
					&nbsp;&nbsp;&nbsp;&nbsp;开始做菜了哟
				  </a>
				</div>
			  </div>
			</nav>
		);
	}
}

export default Navbartwo;