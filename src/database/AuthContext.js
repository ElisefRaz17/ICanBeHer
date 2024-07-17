import React,{useContext} from 'react'
import { store } from '../store/store';
const AuthContext = React.createContext();
export function AuthProvider({children,value,store}) {
    
  return (
    <AuthContext.Provider value={value} store={store}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
    return useContext(AuthContext);
}

