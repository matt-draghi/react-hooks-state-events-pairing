import CommentList from "./CommentList"

function CommentHeader({comments, setShowComments, showComments}){
    const commentStatus = showComments ? "Hide Comments" : "Show Comments"

    const commentHandler = () => {
        setShowComments(showComments => !showComments)
    }

    return(
        <>
            <button onClick={commentHandler}>{commentStatus}</button>
            <h2>{comments.length} Comments</h2>
            <CommentList 
                comments={comments}
                showComments={showComments}
            />
        </>
    )
}

export default CommentHeader