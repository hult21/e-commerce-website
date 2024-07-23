import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const VideoPlayer = () => {
  const videoUrl = "https://cdn.shopify.com/videos/c/o/v/ca14390b57c4474bb010c219e5bcfb13.mp4";
  const linkRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (linkRef.current && videoRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: linkRef.current,
          pinSpacing: false,
        }
      });
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }} className='video-player'>
      <video
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
        autoPlay
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link 
      
        to="/shop/collection"
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          fontSize: '0.8rem',
          textTransform: 'uppercase', 
          color: 'white', 
          textDecoration: 'underline',        
        }}
       
      >
        Shop Online Now
      </Link>
    </div>
  );
};

export default VideoPlayer;
