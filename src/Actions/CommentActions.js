const addNewComment = (comment) => ({type: "ADD_COMMENT", comment})
const fetchingComments = (comments) => ({type: "FETCH_COMMENTS", comments})

export const fetchComments = (restaurant_id) => (dispatch) => {
    fetch(`http://127.0.0.1:3000/restaurants/${restaurant_id}/comments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        }})
        .then(r => r.json())
        .then(data => {
        dispatch(fetchingComments(data))
    })
}

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