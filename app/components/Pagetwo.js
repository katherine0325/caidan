import React from 'react';
import {Link} from 'react-router';

import Navbartwo from './Navbartwo';
import Ingtwo from './Ingtwo';
import Finish from './Finish';

class Pagetwo extends React.Component {
  render() {
    return (
      <div>
		<Navbartwo />
		<Ingtwo />
		<Finish />
      </div>
    );
  }
}

export default Pagetwo;