import { useEffect, useState } from 'react';

const options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 0.9,
};

const observer = new window.IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    (target as any)._handleIntersect(isIntersecting);
  });
}, options);

const useIntersectionVideoPlayer = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!video?.current ?? false) {
      return;
    }

    observer.observe(video.current);
    video.current._handleIntersect = (isIntersecting: boolean) => {
      const { current: videoEl } = video;

      isIntersecting ? videoEl.play() : videoEl.pause();

      setPlaying(!videoEl.paused);
    };
    return () => {};
  }, [video.current]);

  const handlePlay = () => {
    const { current: videoEl } = video;
    playing ? videoEl.pause() : videoEl.play();

    setPlaying(!playing);
  };

  return {
    handlePlay,
    playing,
  };
};

export default useIntersectionVideoPlayer;
