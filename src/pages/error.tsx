import React from 'react';
import { useState } from 'react';
import decentralized from '../../public/decentralized.jpg'


const Error = ({pageProps }) => {
    const [displayGlitch, setDisplayGlitch] = useState(false);
  


  return (
    <>
      {/* <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        
      > */}
          <img src={decentralized.src}>


          </img>

      {/* </div> */}
    </>
  );
};

export default Error;
