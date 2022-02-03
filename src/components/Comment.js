import {useState} from "react"

function Comment({comment}){

    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)

    const handleClick = (event) => {
        if(event.target.innerText.includes('👍')){
            setUpvotes(upvotes => upvotes+1)
        }
        else if(event.target.innerText.includes('👎')){
            setDownvotes(downvotes => downvotes+1)
        }
    }

    return(
        <>
        <h3>{comment.user}</h3>
        <p>{comment.comment}</p>
        <button onClick={handleClick}>{upvotes}👍</button>
        <button onClick={handleClick}>{downvotes}👎</button>
        </>
    )
}

export default Comment