const addNewComment = (restaurant) => ({type: "ADD_COMMENT", restaurant})

export const addComment = (comment, restaurantId, userId) => (dispatch) => {
    let newCommentObj = {
        comment: {
            text: comment,
            restaurant_id: restaurantId,
            user_id: userId
        }
    }
    
    return fetch('http://127.0.0.1:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify(newCommentObj)
    })
    .then(r => r.json())
    .then(data => {
        dispatch(addNewComment(data))
    })
}