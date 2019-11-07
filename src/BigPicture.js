import React from 'react'
import ReactDOM from 'react-dom'

export default class BigPicture extends React.Component{
    constructor(){
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
                this.props.hiddenBigPicture()
            }
        }
        render(){
            return(
                <div className="bigPicture" >
                    <img 
                        id={this.props.picture.id} 
                        name="bigPicture" 
                        src={this.props.picture.src} 
                        alt={this.props.picture.comment} 
                    />
                </div>
            )
        }
    

    

}