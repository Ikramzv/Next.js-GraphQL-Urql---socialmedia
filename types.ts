interface Image {
    asset: {
        url: string
    }
}

interface Save {
    postedBy: User
    userId: string
}

interface Comment {
    postedBy: User
    comment: string
}

export interface Pin {
    about: string
    title: string
    destination: string
    category: string
    image: Image
    userId: string,
    postedBy: User
    save: Save[]
    comments: Comment[]
}

export interface User {
    username: string
    image: Image
    password: string
    email: string
}