import React from "react";
import UserContext from "./UserContext";

// jo bhi prop aa rha h children usko as it is usko use krlo  
//children bas ek generic naam hai ki jo bhi aa rha h usko as it is pass krdo

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider