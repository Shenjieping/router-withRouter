import React, {Component} from 'react';

class Preview extends Component {
	static propTypes = {
		title: React.PropTypes.string,
		link: React.PropTypes.string,
	};

	render() {
		return (
			<div className='article-preview-item'>
				<h1 className='title'>{this.props.title}</h1>
				<div className='date'>{this.props.date}</div>
				<p className='dec'>{this.props.description}</p>
			</div>
		);
	}
}
export default Preview;