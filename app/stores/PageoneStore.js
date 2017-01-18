import alt from '../alt';
import PageoneActions from '../actions/PageoneActions';

class PageoneStore {
  constructor() {
    this.bindActions(PageoneActions);
	this.menunames = [];
	this.menu = [];
	this.del ='';
  }

  onIngMenunames(menunames) {
	this.menunames = menunames;
  }

  onGetMenuSuccess(data) {
	this.menu = data.menu;
  }

  onDel(data) {
	this.del = data;
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }

}

export default alt.createStore(PageoneStore);