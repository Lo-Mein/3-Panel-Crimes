import React, { useState, useEffect } from 'react';
import decentralized from '../../public/decentralized.jpg';
import Lottie from 'react-lottie';

const Error = ({ pageProps }) => {
  const [displayGlitch, setDisplayGlitch] = useState(false);
  const [loading, setLoading] = useState(true);

  const defultOptions = {
    loop: true,
    autoplay: true,
    animationData: require('../assets/loading.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="hero">
        <Lottie options={defultOptions} height={400} width={400} />
      </div>
    );
  } else {
    return (
      <div className="hero bg-image">
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div style={{ maxWidth: '100%' }}>
              <h1 className="hero-title">
                Hi
                {/* <Typed
                  strings={["ACCESS GRANTED", "CLAIM YOUR PRIZE"]}
                  loop
                  typeSpeed={75}
                  backSpeed={50}
                  backDelay={1000}
                /> */}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Error;