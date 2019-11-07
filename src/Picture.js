import React from 'react';
import EditComment from './EditComment'

export default class Picture extends React.Component{
    constructor(props){
        super()
        this.state={
            canEdit: false
        }
        this.doEdit = this.doEdit.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
    }
    doEdit(){
        this.setState({
            canEdit: !this.state.canEdit
        })
    }
    onKeyPress(event){
        console.log("onKeyPress")
        if (event.key === "Enter"){
            this.doEdit()
        }
    }
    render(){
        return(
            <div className="picture">
                <button 
                    id={this.props.picture.id}
                    name="delete"  
                    className="delete"
                    onClick={this.props.handleClick}>
                        X
                </button>
                <img 
                    id={this.props.picture.id} 
                    name="picture" 
                    src={this.props.picture.src} 
                    alt={this.props.picture.comment} 
                    onClick={this.props.handleClick}
                />
                
                 
                {   
                    !this.state.canEdit ?  
                        <div 
                            className="notEdit" 
                            name="comment"
                            title="edit"
                            onClick={this.doEdit} 
                        > 
                            {this.props.picture.comment}
                        </div>
                        :
                        <EditComment 
                            id={this.props.picture.id}
                            className="canEdit"
                            comment={this.props.picture.comment} 
                            handleChange={this.props.handleChange}
                            onKeyPress={this.onKeyPress}
                            doEdit={this.doEdit}
                        />
                }
                    
            
        </div> 
        )
    }

    

}
