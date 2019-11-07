import React from 'react';

export default class LeftMenu extends React.Component {
    constructor(props){
        super()
        this.state = {
            scrPicture: "",
            commentPicture: "",
            showAddForm: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }
    handleClick(event){
        const {name} = event.target
        if (name === "addPicture"){
            this.props.addPicture(this.state.scrPicture, this.state.commentPicture)
        }else if (name === "openAddForm" || name === "cancel"){
            this.setState({
                showAddForm: !this.state.showAddForm
            })
        }
    }
    render(){
        return (
            <div className={this.props.className}>
                <h2>Menu</h2>
                <button name="openAddForm" onClick={this.handleClick}>Add picture </button>
                {this.state.showAddForm &&
                <div className="fields">
                    <span>Image: </span>
                    <input 
                        type="text" 
                        className="scrPicture" 
                        name="scrPicture" 
                        value={this.state.scrPicture} 
                        onChange={this.handleChange}
                    />
                    <br />
                    <span> Comment: </span>
                    <input 
                        type="text" 
                        className="commentPicture" 
                        name="commentPicture" 
                        value={this.state.commentPicture} 
                        onChange={this.handleChange}
                    />
                    <br />
                    <button name="addPicture" onClick={this.handleClick}>Add</button>
                    <button name="cancel" onClick={this.handleClick}>Cancel</button>
                </div>
                }
                
                
            </div>
        )
    }
}
 