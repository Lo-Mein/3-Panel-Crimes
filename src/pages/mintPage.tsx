import React from 'react';


const MintPage = ({pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
    <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base content-start"
        onClick={onClickAnywhere}
      >
        {/* <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main> */}

        <h1 className='mb-2 text-2xl font-bold'>Fear Not Weary Collector, Mint is Here!</h1>
        <div className="grid place-items-center h-96 w-full content-center">
            
        Centered using Tailwind Grid
            {/* <div className='cont flex w-full h-96 space-x-36'> */}
                <div className='picture1 w-48 h-48 flex justify-center text-center items-center bg-white rounded-lg border border-yellow-200 shadow-md dark:bg-gray-800 dark:border-gray-700'></div>
                <div className='picture2 w-48 h-48 flex justify-center text-center items-center bg-white rounded-lg border border-yellow-200 shadow-md dark:bg-gray-800 dark:border-gray-700'></div>
                <div className='picture3 w-48 h-48 flex justify-center text-center items-center bg-white rounded-lg border border-yellow-200 shadow-md dark:bg-gray-800 dark:border-gray-700'></div>
            {/* </div> */}
        </div>

{/* 
        <div className="p-6 w-full h-96 flex justify-center text-center items-center bg-white rounded-lg border border-yellow-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    
            <h5 className="mb-2 text-2xl font-bold ">Congratulations Collector!</h5>
    
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div> */}
    </div>
    </>
  );
};

export default MintPage;
