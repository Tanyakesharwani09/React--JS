import React from "react";


//container kya krta h aapki property accept krna h as a children
function Container ({children}){ // children is just a name you can change it
    return( //if you want to remove this braces of return you can , but make sure everthing is in one life only
        <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
        
    )
}

export default Container