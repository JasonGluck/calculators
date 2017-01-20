import React from 'react';
import {Link} from 'react-router'

export default () => (
  <div id="nav" class="fourteen columns">
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/creditcard">Credit Card</Link></li>
		<li><Link to="/mortgage">Mortgage</Link></li>
		<li><Link to="/studentloan">Student Loan</Link></li>
    <li><Link to="/car">Car</Link></li>
	</ul>
</div>
)
