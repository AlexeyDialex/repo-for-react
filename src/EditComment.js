import React from 'react'
import ReactDOM from 'react-dom'

export default class BigPicture extends React.Component{
    constructor(props){
        super()
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
        UNSAFE_componentWillMount() {
            document.addEventListener('mousedown', this.handleClickOutside, false); 
            console.log("addEventListener");
        }
        
        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside, false);
            console.log("removeEventListener");
        }
        
        handleClickOutside(event) {
            if(!ReactDOM.findDOMNode(this).contains(event.path[0])){
                console.log("OUTSIDE");
                this.props.doEdit()
            }
        }
        render(){
            return(
                <div>
                    <textarea 
                        id={this.props.id}
                        name="comment"
                        className={this.props.className}
                        value={this.props.comment} 
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.onKeyPress}
                    /> 
                </div>
            )
        }
    

    

}