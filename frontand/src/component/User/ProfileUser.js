import React from 'react'
import KarsList from '../Kars/KarsList'


const ProfileUser = (auth) => {

  const handleLogout=()=>{
    auth.logout('/login')
  }
  return (
    <div>
    
     <KarsList/>
      <button onClick={handleLogout}>Logout</button>
    </div>
    
    
   
  )
}

export default ProfileUser