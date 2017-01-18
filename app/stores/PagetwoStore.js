import alt from '../alt';
import PagetwoActions from '../actions/PagetwoActions';

class PagetwoStore {
  constructor() {
    this.bindActions(PagetwoActions);
	this.menunames = [];
	this.finishnames = [];
	this.allmenuname = 0;
  }

  onIngMenunamesSub(menunames) {
	this.menunames =menunames;	
  }
  
  onFinishMenuname(finishnames) {
	this.finishnames = finishnames;
	this.allmenuname = finishnames.length;
  }

}

export default alt.createStore(PagetwoStore);