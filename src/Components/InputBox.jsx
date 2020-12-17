import React from 'react';
import OtpItem from './OtpItem';
import style from './xyz.module.css';

class InputBox extends React.Component {
	constructor(props) {
		super(props);
		this.values = new Array(props.length).fill('');
		this.elements = [];
	}
	handleChange = (value, i) => {
		const { length } = this.props;
		this.values[i] = value;
		if (value.length > 3 && i < length - 1) {
			this.elements[i + 1].input.focus();
		}
		this.props.onChange(this.values.join(''));
	};
	onBackspace = (index, e) => {
		if (index > 0) {
			this.elements[index - 1].input.focus();
		}
		this.props.onChange(this.values.join(''));
	};
	handlePaste = (e) => {
		e.preventDefault();
        var x = e.clipboardData.getData('Text').split('')
        let temp=[]
        var str=""
        for(var j=0;j<x.length;j++){
            str+=x[j];
        if((j+1)%4===0){
            temp.push(str)
            str=""
        }
        }
		temp.forEach((value, i) => {
            this.values[i] = value;
            console.log(value)
			this.elements[i].input.value = value;
			if (i < this.props.length - 1) {
				this.elements[i + 1].input.focus();
			}
		});
    	this.props.onChange(this.values.join(''));
	};
	render() {
		return (
			<div onPaste={this.handlePaste}>
				{this.values.map((item, i) => (
					<OtpItem
						ref={(n) => (this.elements[i] = n)}
						onChange={(value) => this.handleChange(value, i)}
						onBackspace={(e) => this.onBackspace(i, e)}
					/>
				))}
			</div>
		);
	}
}

export default InputBox;
