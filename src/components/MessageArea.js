import {Component} from 'react'

class MessageArea extends Component{
	state={
		newMessage:""
	}
	handleFieldData=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	submit=()=>{
		//console.log(this.state.newMessage)
		this.props.onSubmit({
			text:this.state.newMessage
		})
		this.setState({
			newMessage:""
		})
	}
	render(){
		return(
			<div className="message-area">
				<input 
					value={this.state.newMessage}
					placeholder="Type a message" 
					onChange={this.handleFieldData}
					name="newMessage"/>
				<img onClick={this.submit} src="https://images.gizbot.com/img/2016/03/05-1457182789-540295e7359befb428169b70517d32a17a759a071.jpg" width="3%"/>
			</div>
		)
	}
}
export default MessageArea