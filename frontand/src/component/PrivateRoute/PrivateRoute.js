import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAuthUser } from '../../api/authapi';
import { useDispatch, useSelector } from 'react-redux';
// import { setAuth } from '../../store/authSlice';
import login from '../login/Login';
import User from '../User/User'
import Admin from '../Admin/Admin';
import Navbar from '../navbar/Navbar';






const PrivateRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector(state=> state.auth);

  useEffect(() => {
    const getAuth = async () => {
      const data = await fetchAuthUser();
      console.log('data auth', data);
      // dispatch(setAuth(data));
    };

    getAuth();
  }, );

   


  const token = localStorage.getItem('token');
  console.log('token', token);

  // logout
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      {token ? (
        <div>
          <Navbar auth={authUser} logout={logout} />

          {authUser.role === 'Admin' ? <Admin /> : <User />}
        </div>
      ) : (
        <login />
      )}
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default PrivateRoute;