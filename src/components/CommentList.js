//Hide comment button?
//Call comments
import {useState} from "react"
import Comment from "./Comment.js"

function CommentList({comments, showComments}){
    const [searchText, setSearchText] = useState("")

    const handleSearch = ({target}) => {
        setSearchText(target.value)
    }

    const searchResults = comments.filter((comment) => {
        return(
            comment.user.toLowerCase().includes(searchText.toLowerCase())
        )
    })

    if(showComments){
        return(
            <section>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                />
                {searchResults.map((comment => {
                    return <Comment key={comment.id} comment={comment}/>
                }))}
            </section>
        )
    }
    else{
        return null
    }
}

export default CommentList