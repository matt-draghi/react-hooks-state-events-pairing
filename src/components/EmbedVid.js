function EmbedVid({src}){
  return(
      <iframe
        width="919"
        height="525"
        src={src}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
  )
}

export default EmbedVid