import React from 'react'
import LeftMenu from './LeftMenu'
import PictureData from './PictureData'
import Picture from './Picture'
import BigPicture from './BigPicture'

class Gallery extends React.Component {
    constructor(props){
        super()
        this.state = {
            pictureData: [],
            pictureList: [],
            bigPicture: {},
            showBigPicture: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this) 
        this.hiddenBigPicture = this.hiddenBigPicture.bind(this) 
        this.addPicture = this.addPicture.bind(this)
    }
    componentDidMount(){
        const data = new PictureData()
        this.setState({
            pictureData: data,
            pictureList: data.getPicturies()
        })
    }
    handleClick(event){
        const {id, name} = event.target
        if (name === "picture"){
            this.state.pictureList.forEach(picture => {
                String(picture.id) === id && this.setState({
                    bigPicture: picture,
                    showBigPicture: true
                }) 
            })
        }
        if (name === "delete"){
            console.log("delete")
            this.state.pictureData.deletePicture(id)
            this.setState({
                pictureList: this.state.pictureData.getPicturies()
            })

        }
    }
    handleChange(event){
        const {id, name, value} = event.target
        console.log("handleChange" + value)
        if(name === "comment"){
            const changedPictureList = this.state.pictureList.map(picture => {
                if (String(picture.id) === String(id)){
                    picture.comment = value
                    console.log("comment: " + value)
                    return(picture)
                }else {
                    return(picture)
                }
            })
            console.log(changedPictureList)
            this.setState({
                pictureList: changedPictureList
            })
        }
    }
    hiddenBigPicture(){
        this.setState({
            showBigPicture: false
        })
    }
    addPicture(srcPicture, commentPicture){
        const arrayID = this.state.pictureList.map(picture => {
            return (Number(picture.id))
        })
        const lastID = (this.state.pictureList.length !== 0) ?  //check for 
        Math.max.apply(null, arrayID) : 0
        const picture = {
            id: lastID + 1,
            src: srcPicture,
            comment: commentPicture
        }
        this.state.pictureData.addPicture(picture)
        this.setState(prevState => {
            return{
                pictureList: prevState.pictureList.concat(picture)
            }
        })
    }
    render(){
        const pictureList = this.state.pictureList.map(picture => {
            return(
                <Picture 
                    key={`picture ${picture.id}`} 
                    picture = {picture}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                    openBigPicture={this.openBigPicture}
                />
            )
        })
        return (
            <div>
                
                <LeftMenu 
                    className="leftMenu" 
                    addPicture={this.addPicture}
                />
                <div className={this.props.className}>
                    {pictureList}
                    {this.state.showBigPicture && 
                        <BigPicture 
                            picture={this.state.bigPicture}
                            hiddenBigPicture={this.hiddenBigPicture}
                        />
                    }
                </div>
            </div>
            
        )
    }
}

export default Gallery