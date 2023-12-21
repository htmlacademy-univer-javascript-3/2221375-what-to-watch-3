import { useEffect, useRef } from 'react';

type PlayerProps = {
  videoSrc: string;
  poster: string;
  isActive: boolean;
}

function VideoPlayer(props: PlayerProps):JSX.Element{
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoPlayer = videoPlayerRef.current;
    const timer: NodeJS.Timeout = setTimeout(()=>{
      if (videoPlayer && props.isActive) {
        videoPlayer.play();
      } else if (videoPlayer && !props.isActive){
        videoPlayer.load();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [props.isActive]);
  return (
    <video data-testid="videoPlayer" src={props.videoSrc} ref={videoPlayerRef} poster={props.poster} muted className="player__video"></video>
  );
}
export default VideoPlayer;
