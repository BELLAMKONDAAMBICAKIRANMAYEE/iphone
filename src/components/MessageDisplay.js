import {Component} from 'react'

class MessageDisplay extends Component{
	state={
		time:new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric"})
	}
	render(){
		return this.props.message?(
			<div>
				<p>
					{this.props.message} 
					<span className="time">{this.state.time}</span>
				</p>
			</div>
		):null
	}
}
export default MessageDisplay