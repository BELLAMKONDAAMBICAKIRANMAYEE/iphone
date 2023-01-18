import {Component} from 'react'
import MessageArea from './MessageArea'
import MessageDisplay from './MessageDisplay'
class MessageStorage extends Component{
	state={
		messageList:[]
	}
	addMessage=(currentMessage)=>{
		//storing logic present here
		this.setState({
			messageList:[...this.state.messageList,currentMessage]
		})

	}
	render(){
		console.log(this.state.messageList)
		return(
			<div>
			{/*calling messagearea and getting the message also by using onsubmit*/}
				<MessageArea onSubmit={this.addMessage}/>
				{
					this.state.messageList.map((m)=>(
						<MessageDisplay message={m.text}/>
					))
				}
			</div>
		)
	}
}
export default MessageStorage