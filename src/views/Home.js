import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import PreviewList from './../components/Home/PreviewList';
// import { listActions } from './HomeRedux';
import {Link, Lifecycle} from 'react-router'

class Home extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.state={
			like: 'aaa',
			unsaved: true
		}
	}
	handleClick() {
		this.setState({
			like: 'bbbb'
		})
	}
	shouldComponentUpdate() {
		return true
	}
	componentWillMount() {
		// console.log('componentWillMount',new Date().getTime())
		/*this.props.router.setRouteLeaveHook(this.props.route, () => {
	      if (this.state.unsaved) {
	        return false;
	       }else {
	          return true;
	       }
	    })*/
	}

	render() {
		// console.log(this.state.like)
		// console.log('render',new Date().getTime())
		return (
			<div>
				<h1>Home</h1>
				<p onClick={this.handleClick}>{this.state.like}</p>
			</div>
		);
	}
	componentDidMount() {
		// console.log('componentDidMount',new Date().getTime())
	}
}

export default Home;