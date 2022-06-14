import React, {createContext, useState, useContext, useEffect} from 'react';
import Router, {useRouter} from 'next/router';


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [authorized, setAuthorized] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        async function checkAuth(){
            const key = localStorage.getItem('key');
            if(key){
                setAuthorized(true);
                Router.push('/mintPage');
            }   
            if(!key){
                setAuthorized(false);
                Router.push('/');
            }
            setLoading(false);
        }
        checkAuth();
    }, [])

    return(
        <AuthContext.Provider value={{isAuthenticated: authorized, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

// export const ProtectRoute = ({ children }) => {
//     const {  } = useAuth();
//     if ((!isAuthenticated && window.location.pathname !== '/login')){
//       return <div>loading</div>; 
//     }
//     return children;
//   };