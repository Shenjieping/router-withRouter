import React, {Component} from 'react';
import Preview from './Preview';

class PreviewList extends Component {
	static propTypes = {
		loading: React.PropTypes.bool,
		error: React.PropTypes.bool,
		articleList: React.PropTypes.arrayOf(React.PropTypes.object),
		loadArticles: React.PropTypes.func,
	};
	componentDidMount() {
		this.props.loadArticles();
	}
	render() {
		const { loading, error, articleList } =this.props;
		if (error) {
			return <p className='message'>报错啦</p>
		}

		if (loading) {
			return <p className='message'>Loading...</p>
		}
		return articleList.map((item, key) => {
			return (
				<Preview {...item} key={key} />
			);
		})
	}
}
export default PreviewList;