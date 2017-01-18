import React from 'react';
import {Link} from 'react-router';

import PageoneStore from '../stores/PageoneStore';
import PageoneActions from '../actions/PageoneActions';

var styles = {
	del:{
		marginTop:8
	},
	title:{
		fontFamily:'Microsoft YaHei',
	}
};

class Navbar extends React.Component
{
	constructor(props) {
		super(props);
		this.state = PageoneStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		PageoneStore.listen(this.onChange);

		$(document).ajaxStart(() => {
		  PageoneActions.updateAjaxAnimation('fadeIn');
		});

		$(document).ajaxComplete(() => {
		  setTimeout(() => {
			PageoneActions.updateAjaxAnimation('fadeOut');
		  }, 750);
		});

		$('#delall').click(function(){
			var text = $(this).text();
			if (text == '删除')
			{
				$(this).addClass('btn-danger').removeClass('btn-default');
				$(this).text('完成');
				PageoneActions.del('del btn-danger shake');
			}else{
				$(this).addClass('btn-default').removeClass('btn-danger');
				$(this).text('删除');
				PageoneActions.del('');
			}
			
		});
	}

	componentWillUnmount() {
		PageoneStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		var menuname = document.getElementById('menuname').value.trim();

		if (menuname) {
			PageoneActions.addMenuname(menuname);
			document.getElementById('menuname').select();
		}
	}

	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
			  <div className="container-fluid">
				<div className="navbar-header">
				  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
				  <a className="navbar-brand" href="" style={styles.title}>
					<span className={'triangles animated ' + this.state.ajaxAnimationClass}>
					  <div className='tri invert'></div>
					  <div className='tri invert'></div>
					  <div className='tri'></div>
					  <div className='tri invert'></div>
					  <div className='tri invert'></div>
					  <div className='tri'></div>
					  <div className='tri invert'></div>
					  <div className='tri'></div>
					  <div className='tri invert'></div>
					</span>
				    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后厨传菜应用
				  </a>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				  <ul className="nav navbar-nav navbar-right">
					<li>
						<form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit.bind(this)}>
						  <div className="input-group">
							<input type="text" className="form-control" placeholder="菜品名称" name='menuname' id='menuname' />
							<span className="input-group-btn">
								<button type="submit" className="btn btn-default">添加菜品</button>
							</span>
						  </div>
						</form>
					</li>
					<li>
						<button className="btn btn-default" id='delall' style={styles.del}>删除</button>
					</li>
				  </ul>
				</div>
			  </div>
			</nav>
		);
	}
}

export default Navbar;