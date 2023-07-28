import React from 'react'
import ListUser from './../Admin/ListUsers/ListUser';

const ProfileUser = (auth) => {
  return (
    <div>
    <div>
      <h1>Profile</h1>
      {auth && (
        <div>
          <p>ListUser: {auth.KarsList}</p>
          {/* other details */}
        </div>
      )}
    </div>
    
    
    </div>
  )
}

export default ProfileUser