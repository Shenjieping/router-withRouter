import React, {Component} from 'react';
import {withRouter} from 'react-router';

export default withRouter(class extends Component {
	state = {
		unsaved: true
	}
	componentDidMount() {
		this.props.router.setRouteLeaveHook(this.props.route, () => {
			if (this.state.unsaved) {
				if(confirm('确定要离开吗')) {
					return true
				} else {
					return false
				}
			}
		})
	}
	render() {
		return (
			<div>
				<h2>About</h2>
				路由跳转前确认
			</div>
		)
	}
})