import React from 'react'

const ProfileUser = (auth) => {
  return (
    <div>
    <div>
      <h1>Profile</h1>
      {auth && (
        <div>
          <p>List: {auth.KarsList}</p>
          {/* other details */}
        </div>
      )}
    </div>
    
    
    </div>
  )
}

export default ProfileUser