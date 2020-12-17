import React from 'react';
import style from './xyz.module.css';
class OtpItem extends React.Component {
	handleKey = (e) => {
		if (e.keyCode === 8 && !this.input.value) {
			this.props.onBackspace(e);
		}
	};
	focus = () => {
		this.input.focus();
	};
	onChange = (e) => {
		this.props.onChange(e.target.value);
	};

	render() {
		const { isTrue } = this.props;
		return (
			<input
				maxLength={4}
				className={style.boxes}
				onChange={this.onChange}
				ref={(n) => (this.input = n)}
				onKeyDown={this.handleKey}
			/>
		);
	}
}

export default OtpItem;
