export const types = `#graphql
# Input type for creating a new post
input createPostData {
    content: String
    imgURL: String!
}

# Post type
type Post {
    id: String!
    content: String
    imgURL: String!
    author: User
    totalLikeCount: Int!  # Total number of likes for the post
    userHasLiked: Boolean!  # Indicates whether the authenticated user has liked the post
}
`
