import { useParams } from "react-router";
import ReactPlayer from 'react-player'


export const Abc = () => {
  let { id } = useParams();
  const videos = [{ id: 1, title: "ewdewefwed", url: "https://www.youtube.com/watch?v=eAz4MDzwg5A" }, { id: 2, title: "efewf e wdewefwed", url: "https://www.youtube.com/watch?v=RRJDaX0Dutk" }, { id: 3, title: "ewdewef ewd wed", url: "https://www.youtube.com/watch?v=lLeZ8Cr2YVM" }]

  const video = videos.find(v => v.id == id)


  return (
    <div>
      <ReactPlayer url={video?.url} width="600px" height="360px" />
      <div className="video_text">
            <h4>{video.title}</h4>
            <p>wefregfre</p>
            <p>wefr3e4 1000</p>
        </div>
    </div>
  )
}