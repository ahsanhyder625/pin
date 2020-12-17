import InputBox from './Components/InputBox';
import React from 'react';
import style from './Components/xyz.module.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      value: '',
      status:false
		};
  }

  handleSubmit=()=>{
    this.setState({
      status:true
    })
  }
  handleDelete=()=>{
    this.setState({
      value:"",
      status:false
    })
  }
  
	render() {
		return (
      <>
			<div className="App" className={style.design}>
				<h3 className={style.color}>Card Number*</h3>
				<InputBox length={4} onChange={(val) => this.setState({ value: val })} />
        <button className={style.btn} onClick={this.handleSubmit}>Submit</button>
			</div>
      <div>
        {this.state.status?<div><h3 className={style.num}>{this.state.value}</h3><button onClick={this.handleDelete}>Delete</button></div>:<div><h3></h3></div>}
      </div>

      </>
		);
	}
}
