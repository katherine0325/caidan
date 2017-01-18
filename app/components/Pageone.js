import React from 'react';
import {Link} from 'react-router';

import Navbar from './Navbar';
import Menu from './Menu';
import Ingone from './Ingone';

class Pageone extends React.Component {
  render() {
    return (
      <div>
		<Navbar />
		<Menu />
		<Ingone />
      </div>
    );
  }
}

export default Pageone;