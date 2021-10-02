class Post {
    id = null;
    title = null;
    content = null;
    imageUrl = null
    createdAt = null;
    updatedAt = null;
    isShow = null;

    constructor(title, content){
        this.title = title
        this.content = content
    }

    // constructor(id, title, content, imageUrl , createdAt, updatedAt, isShow) {
    //     this.id = id;
    //     this.title = title;
    //     this.content = content;
    //     this.imageUrl = imageUrl
    //     this.createdAt = createdAt;
    //     this.updatedAt = updatedAt;
    //     this.isShow = isShow;
    // }
}

const GlobalPost = new Post()
export default GlobalPost