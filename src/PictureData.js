
export default  class PictureData{
    constructor(){
        this.picturies = [
            {
                id: 1,
                src: "http://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg", 
                comment: "first comment for first picture"
            },
            {
                id: 5,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc3dTFigPTqNO4Z9xuxh4mX2AZCm00OaWKuSQXmBoBI7cxCl4q",
                comment: "second picture"
            },
            {
                id: 7,
                src: "https://thumbs.dreamstime.com/z/%D1%88%D0%B0%D1%80%D0%B6-%D1%81%D1%8B%D1%89%D0%B8%D0%BA%D0%B0-sherlock-holmes-71359566.jpg",
                comment: "third picture"
            },
            {
                id: 8,
                src: "https://i.pinimg.com/originals/48/8c/b8/488cb806c99e0266b614cbbfa288c179.jpg",
                comment: "fourth picture"
            }
        ]
    }   

    getPicturies(){
        return(
            this.picturies
        )
    }
    addPicture(picture){
        this.picturies = this.picturies.concat(picture)
    }

    changePicture(oldPicture, newPicture){
        const picturies = this.picturies.map(picture => {
            if (picture.id === oldPicture){
                return newPicture
            }else {
                return picture
            }
        })
        this.picturies = picturies
    }
    deletePicture(id){
        console.log("deletePicture")
        const picturies = this.picturies.filter(picture => 
            picture.id !== Number(id)
        )
        console.log(picturies)
        this.picturies = picturies
        console.log(this.picturies)
    }
}