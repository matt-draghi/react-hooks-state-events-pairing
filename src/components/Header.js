//Heading
//Views and Date
//Like Buttons
//Call CommentList
function Header({title, views, createdAt, upvotes, downvotes, setDownvotes, setUpvotes}){

    const handleClick = (event) => {
        if(event.target.innerText.includes('👍')){
            setUpvotes(upvotes => upvotes+1)
        }
        else if(event.target.innerText.includes('👎')){
            setDownvotes(downvotes => downvotes+1)
        }
    }

    return(
        <div>
            <h1>{title}</h1>
            <p>{views} views | Uploaded {createdAt}</p>
            <button onClick={handleClick}>{upvotes}👍</button>
            <button onClick={handleClick}>{downvotes}👎</button>
        </div>
    )
}

export default Header