import video from "../data/video.js";
import EmbedVid from "./EmbedVid.js";
import Header from "./Header.js";
import {useState} from "react"
import CommentHeader from "./CommentHeader.js"

function App() {
  console.log("Here's your data:", video);
  
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  const [showComments, setShowComments] = useState(true)

  return (
    <div className="App">
      <EmbedVid src={video.embedUrl}/>
      <Header 
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={upvotes}
        setUpvotes = {setUpvotes}
        downvotes={downvotes}
        setDownvotes={setDownvotes}
      />
      <CommentHeader 
        comments={video.comments}
        showComments={showComments}
        setShowComments={setShowComments}
      />
    </div>
  );
}

export default App;
