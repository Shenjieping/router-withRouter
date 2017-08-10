import React, {Component} from 'react';
import { Link, Lifecycle, RouteContext } from 'react-router';

export default class Nav extends Component {
	componentWillMount() {
		// console.log(this.context)
	}
	render() {
		return (
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/detail/2'>Detail</Link>
			</nav>
		)
	}
}
// export default Nav;