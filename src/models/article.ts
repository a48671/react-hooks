interface InterfaceAuthor {
    username: string,
    image: string
}

export interface InterfaceArticle {
    author: InterfaceAuthor,
    createdAt: Date,
    slag: string,
    title: string,
    description: string,
    tagList: Array<string>
}