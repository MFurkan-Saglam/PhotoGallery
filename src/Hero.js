import React from 'react'


const Hero=(handleLogout)=>{
    return(
        <div>
        <h2>Welcome</h2>
        <button onClick={handleLogout}> lOGOUT</button>
        </div>
    )
    
    
}

export default Hero;