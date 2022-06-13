import React, { useState, useEffect } from 'react';
import Router from 'next/router';

const RouteGuard = (WrappedComponent) => {
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    console.log('isSsr: ', isSsr);
    setIsSsr(false);
  }, []);
  // eslint-disable-next-line react/display-name
  return (props) => {
    if (!isSsr) {
      const key = localStorage.getItem('key');
      //  console.log('keysss', key)

      if (!key) {
        Router.replace('/error');
        return null;
      }
      return (
        <div>
          <WrappedComponent {...props} />
        </div>
      );
    }
    return null;
  };
};
export default RouteGuard;
