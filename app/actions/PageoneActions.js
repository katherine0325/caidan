import alt from '../alt';

class PageoneActions
{
	constructor() {
		this.generateActions(
			'ingMenunames',
			'updateOnlineUsers',
			'addMenunameSuccess',
			'getMenuSuccess',
			'del',
			'updateAjaxAnimation',
		);
	}

	addMenuname(menuname) {
		$.ajax({
		  type: 'POST',
		  url: '/api/addmenuname',
		  data: { name: menuname }
		})
		  .done((data) => {
			this.actions.getMenuSuccess(data);
		  })
		  .fail((jqXhr) => {
			console.log('addMenuname fail');
		  });
	}

	getMenu(){
		$.ajax({ url: '/api/menu' })
		  .done((data) => {
			this.actions.getMenuSuccess(data);
		  })
		  .fail((jqXhr) => {
			console.log('get Menuname fail')
		  });
	}

	deleteMenuname(id){
		$.ajax({
		  type: 'DELETE',
		  url: '/api/deletemenuname',
		  data: { id: id }
		})
		  .done((data) => {
			this.actions.getMenuSuccess(data);
		  })
		  .fail((jqXhr) => {
			console.log('delete Menuname fail');
		  });
	}

}

export default alt.createActions(PageoneActions);