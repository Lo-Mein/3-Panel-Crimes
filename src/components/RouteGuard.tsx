import React from 'react'
import  Router  from 'next/router'

const RouteGuard = (WrappedComponent)=>{
 // eslint-disable-next-line react/display-name
 return (props)=>{
   if(typeof window !=="undefined"){
     const key = localStorage.getItem("key");
    //  console.log('keysss', key)

     if(!key){
       Router.replace("/error");
       return null;
     }
     return (
     <div><WrappedComponent {...props}/>
     </div>
     )
   }
   return null;
 };
};
export default RouteGuard;