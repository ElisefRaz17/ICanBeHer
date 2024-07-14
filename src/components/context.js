import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AspirationContext = createContext();

export const AspirationProvider = ({children}) => {
    const [aspiration, setAspiration] = useState("");

    return(
        <AspirationContext.Provider value={{aspiration,setAspiration}}>
            {children}
        </AspirationContext.Provider>
    )
}