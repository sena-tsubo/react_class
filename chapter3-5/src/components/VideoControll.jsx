import { useRef, useState } from 'react'
import { FaPlay, FaStop } from 'react-icons/fa'
import videoUri from '../assets/video.mp4'
import './VideoControll.css'

function VideoControll() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayToggle = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <main className="video-player">
      <video
        ref={videoRef}
        className="video"
        src={videoUri}
        controls
        muted={false}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.volume = 1
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="video-controls" aria-label="動画コントロール">
        <button type="button" onClick={handlePlayToggle}>
          {isPlaying ? (
            <FaStop aria-hidden="true" />
          ) : (
            <FaPlay aria-hidden="true" />
          )}
          {isPlaying ? '停止' : '再生'}
        </button>
      </div>
    </main>
  )
}

export default VideoControll